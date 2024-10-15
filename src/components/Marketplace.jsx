import { useState, useEffect } from 'react'
import Card from './Card';

function Marketplace() {

    const [cosmetics, setCosmetics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the cosmetics.json file
    const fetchCosmeticsData = async () => {
    try {
    const response = await fetch('../../public/Items.json'); // Dummy fetch from local JSON
    if (!response.ok) {
        throw new Error('Failed to fetch cosmetics data');
    }
    const data = await response.json();
        setCosmetics(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    }

    // Use useEffect to fetch the data when the component mounts
    useEffect(() => {
        fetchCosmeticsData();
    }, []);

    if (loading) return <p>Loading cosmetics...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <section className="w-full min-h-fit p-2">
            <div className='flex flex-wrap gap-3 lg:ml-20 ml-10 md:ml-15'>
                {cosmetics.map((cosmetic, index) => (
                    <Card 
                        key={index} 
                        name={cosmetic.name} 
                        description={cosmetic.description} 
                        price={cosmetic.price}
                        image={cosmetic.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Marketplace