import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import truck from '../assets/truck.svg'
import delivery from '../assets/delivery.svg'

function DescriptionPage() {
    const { idno } = useParams(); // Get the name from the URL params
    const [cosmetic, setCosmetic] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [counter, setCounter] = useState(0)

    // Fetch the specific cosmetic item by name
    const fetchCosmeticByName = async (name) => {
        try {
        const response = await fetch('../../public/Items.json')
        if (!response.ok) {
            throw new Error('Failed to fetch cosmetics data');
        }
        const data = await response.json()
        
        // Find the cosmetic item by its name (case-insensitive comparison)
        const foundCosmetic = data.find((item) => item.name.toLowerCase() === name.toLowerCase());
        
        if (foundCosmetic) {
            setCosmetic(foundCosmetic);
        } else {
            throw new Error('Cosmetic not found')
        }
        } catch (err) {
        setError(err.message)
        } finally {
        setLoading(false)
        }
    };

    // Fetch the data when the component mounts
    useEffect(() => {
        fetchCosmeticByName(idno) // Call the function with the idno param (which is the name)
    }, [idno]);

    if (loading) return <p>Loading cosmetic details...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <section>
        {cosmetic ? (
            <div className='mt-5'>
                <p className='mb-3 ml-3 font-extralight text-slate-800/70'>
                    <Link 
                        to='..'
                        className='decoration underline'
                    >
                        products
                    </Link>
                    {` / ${cosmetic.name}`}
                </p>
                <div className='flex flex-wraph-[80vh] p-3'>
                <div 
                    className="w-[30rem] h-[30rem] bg-no-repeat bg-cover mr-10"
                    style={{backgroundImage: `url('${cosmetic.image}')`}}
                ></div>
                    <div className=''>
                        <h2 className='text-2xl font-extrabold'>{cosmetic.name}</h2>
                            <p className='text-lg w-[35rem]'>{cosmetic.description}</p>
                        <p>stars</p>
                        <hr className='mt-5 mb-5 border-black/30'/>
                            <p className='text-3xl font-bold'>${cosmetic.price}</p>
                        <hr className='mt-5 mb-5 border-black/30'/>
                        <div className='flex gap-3 items-center'>
                            <div className='flex'>
                                <button 
                                    className='p-1 justify-center items-center bg-slate-800/40 text-2xl text-red-600 w-[4rem] rounded-l-3xl'
                                    onClick={() => {
                                        if(counter > 0) setCounter(prevCounter => prevCounter - 1)
                                    }}
                                >-</button>
                                <p className='flex bg-slate-800/40 justify-center items-center'>{counter}</p>
                                <button 
                                    className='p-1 justify-center items-center bg-slate-800/40 text-2xl text-green-400 w-[4rem] rounded-r-3xl'
                                    onClick={() => {
                                        setCounter(prevCounter => prevCounter + 1)
                                    }}
                                >+</button>
                            </div>
                            <div>
                                {counter >= 1 && ` total: ${cosmetic.price*counter}`}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button className='border-2 border-green-700 p-3 rounded-full w-[15rem] hover:bg-green-800/30'>Add to Cart</button>
                        </div>
                        <div className='border p-2 border-black/30 mt-3'>
                            <div className='flex items-center gap-2 border-b border-black/30 mb-3 mt-3 p-2'>
                                <img src={truck} width="30rem"/>
                                <p className='text-lg font-bold'>free Delivery</p>
                            </div>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-2'>
                                    <img src={delivery} width="30rem"/>
                                    <p className='font-bold'>Return Delivery</p>
                                </div>
                                <p className='ml-8'>Free 30 days Delivery Returns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <p>No cosmetic found with the given name.</p>
        )}
        </section>
    )
}

export default DescriptionPage;
