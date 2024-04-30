import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div className=' text-center md:text-3xl text-2xl lg:text-5xl font-bold text-red-500 mt-10'>ITEM DETAILS</div>
            <div className=' flex lg:flex-row flex-col gap gap-4 mt-20 mb-16'>
                <div className=' lg:w-1/2'>
                    <img className=' w-full' src={data.photo} alt="" />
                </div>
                <div className=' lg:w-1/2 '>
                    <div className='lg:text-left text-center '>
                        <h1 className=' text-4xl font-semibold'>{data.itemName}</h1>
                        <h1 className=' text-xl font-semibold pb-7'>{data.subcategoryName}</h1>
                        <p className=' pb-6 '>{data.description}</p>
                        <p><span className=' font-semibold'>Price :</span> {data.price} TK</p>
                        <p><span className=' font-semibold'>Customization :</span> {data.customization}</p>
                        <p><span className=' font-semibold'>Status :</span> {data.status}</p>
                        <p><span className=' font-semibold'>Rating :</span> {data.rating}</p>
                        <p className=' pb-7'><span  className=' font-semibold'>Processing Time :</span> {data.processingTime}</p>
                        <button className=' px-3 py-2 mb-5 bg-red-400 text-white border-none'>Add to Cart</button>
                    </div>
                    <hr />
                    <div className=' lg:text-left text-center'>
                        <h1 className=' text-xl font-semibold pt-3'>Added by</h1>
                        <p> <span className=' font-bold'>Name : </span>{data.name}</p>
                        <p> <span className=' font-bold'>Email : </span> {data.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;