import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [cosmetics, setCosmetics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch cosmetics data
    const fetchCosmetics = async () => {
        try {
            const response = await fetch('../../public/Items.json'); // Fetch the cosmetics list
            if (!response.ok) {
                throw new Error('Failed to fetch cosmetics data');
            }
            const data = await response.json();
            setCosmetics(data); // Set cosmetics list in state
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Retrieve items from localStorage and filter the cosmetics list
    const getCartItems = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage
        setCartItems(savedCart);
    };

    // Use useEffect to fetch cosmetics and cart items when the component mounts
    useEffect(() => {
        fetchCosmetics();
        getCartItems();
    }, []);

    // Filter the cosmetics based on cart items
    const filteredCosmetics = cosmetics.filter(item => cartItems.includes(item.name));

    // Calculate the total price of the cart
    const cartTotal = filteredCosmetics.reduce((total, item) => total + item.price, 0);

    if (loading) return <p>Loading cart...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
            <p className='mb-3 mt-7 ml-3 font-extralight text-slate-800/70'>
                <Link
                    to='..'
                    className='decoration underline'
                >
                    products
                </Link>
                {` / cart`}
            </p>

            {filteredCosmetics.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='flex flex-col gap-1 p-1 ml-10'>
                    {filteredCosmetics.map(item => (
                        <Link 
                            key={item.name} 
                            className='flex border gap-2'
                            to={`/item/${item.name}`}
                        >
                            <img src={item.image} alt={item.name} width="100" />
                            <div>
                                <h3 className='text-lg font-bold'>{item.name}</h3>
                                <p>{item.description}</p>
                                <p className='font-bold text-xl'>${item.price}</p>
                            </div>
                        </Link>
                    ))}
                    {/* Display total */}
                    <div className='mt-4 font-bold text-lg'>
                        <p>Total: ${cartTotal.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CartPage;
