import axios from 'axios'
import { useState, useEffect } from 'react'
import './ExploreColony.css'

function ExploreColony() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const env = {
        base_url: import.meta.env.VITE_BASE_URL,
        get_cats_uri: import.meta.env.VITE_GETCATS_URI,
    };
    const getCatsUrl = env.base_url + env.get_cats_uri;

    const getCats = async () => {
        try {
            const request = await axios.get(getCatsUrl);
            const response = await request.data;
            const data = await response.data;
    
            setData(data);
        } catch (error) {
            console.log('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title='Explore Colony - MeCat';
        getCats();
    }, []);

    return (
        <div className='my-8 flex flex-col w-full items-center sm:w-3/4'>
            <div className='text-main-brown'>
                <h1>Explore Colony</h1>
            </div>
            <hr className='line my-1.5 w-4/5'/>
            <p className='mt-0.5 italic text-slate-400'>Click row table to see the photos!</p>
            <table className="border-collapse mt-7 mb-10 w-11/12 text-white ">
                <tbody>
                { loading ? (
                        <tr className='animate-pulse border-t-2 border-b-2 border-white text-center bg-secondary-dark'>
                            <td className='py-4'>
                                <p className='italic font-semibold tracking-widest'>fetching data...</p>
                            </td>
                        </tr>
                ) : (
                    <>
                    { data.length == 0 ? (
                        <tr className='border-t-2 border-b-2 border-white text-center'>
                            <td className='py-4'>
                                <p className='italic font-semibold tracking-widest'>empty result</p>
                            </td>
                        </tr>
                    ) : (
                        <>
                            { data.map((cat, key) => {
                                return(
                                    <tr key={ key } onClick={()=>{ window.open(cat.photo, '_blank') }} className="table-row">
                                        <td className='w-6/12 py-2 pr-0'>
                                            <div className='flex flex-col justify-center w-full h-full'>
                                                <p className='font-semibold'>{cat.name} ({cat.age})</p>
                                                <p className='owner-text italic'>Owner: {cat.owner}</p>
                                            </div>
                                        </td>
                                        <td className='w-3/12 py-2 px-0 text-center'>
                                            <p>{cat.furcolor}</p>
                                        </td>
                                        <td className='w-3/12 py-2 pl-0 text-center '>
                                            <p>{cat.type}</p>
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                    )}
                    </>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ExploreColony;
