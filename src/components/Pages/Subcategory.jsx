import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Subcategory = () => {
    const { subcategory } = useParams()
    const data = useLoaderData()
    console.log(data)
    return (
        <div className=' mt-16'>
            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold text-center space-y-2'>SUBCATEGORY : <span className=' text-red-500'>{subcategory.toUpperCase()}</span></h1>
            <p className=' text-center text-sm md:text-lg lg:text-xl font-semibold pt-4'>{data.length} items available for this category</p>
            <div className='mt-14 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 place-items-center pb-10'>
                {
                    data.map((sub, idx) =>
                        <div key={idx} className=" dark:text-black dark:text-opacity-75 card w-96 bg-base-100 shadow-xl rounded-none">
                            <div className='overflow-hidden'><figure><img className='hover:scale-[1.2] duration-[700ms] ease-in-out h-64 w-full' src={sub.photo} alt="" /></figure></div>
                            <div className="card-body">
                                <h2 className="card-title">{sub.itemName}</h2>
                                <p>{sub.subcategoryName}</p>
                                <p>{sub.description.length > 132 ? sub.description.slice(0, 132) : sub.description}{sub.description.length > 120 ? '....' : ''}</p>
                                <p>Price: {sub.price}</p>
                                <p>Rating: {sub.rating}</p>
                                <p>Processing Time: {sub.processingTime}</p>
                            </div>
                            <Link to={`/itemdetails/${sub._id}`}><button className=' hover:text-red-600 duration-500 ease-in-out delay-75 hover:bg-gray-200 w-full bg-red-500 py-3 text-white'>View Details</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Subcategory;