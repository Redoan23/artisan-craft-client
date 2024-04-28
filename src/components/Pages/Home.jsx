import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'
import { EffectFade, Autoplay } from 'swiper/modules';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
SwiperCore.use([Autoplay]);


// const subcategoryItems = ['Clay-made Pottery', 'Stoneware', 'Porcelain', 'Terra-Cotta', 'Ceramics & Architectural', 'Home Decor Pottery']
const potteryArray = [
    { name: 'Clay-Made Pottery', image: 'https://i.ibb.co/T0cwMY4/2149644893-1.jpg' },
    { name: 'Stoneware', image: 'https://i.ibb.co/6RwNJsQ/5517.jpg' },
    { name: 'Porcelain', image: 'https://i.ibb.co/rsVcCs0/2150158607.jpg' },
    { name: 'Terra-Cotta', image: 'https://i.ibb.co/tYhB9jt/2151261733.jpg' },
    { name: 'Ceramics & Architectural', image: 'https://i.ibb.co/r67jfLG/cearamic-unsplash.jpg' },
    { name: 'Home Decor Pottery', image: 'https://i.ibb.co/t4nZghr/2149646532.jpg' }
];

const Home = () => {
    const data = useLoaderData()
    // const { name, email, photo, itemName, subcategoryName, description, price, rating, customization, status, processingTime } = data
    const navigate = useNavigate()

    return (
        <div className='bg-white dark:bg-gray-700  dark:text-white dark:text-opacity-70'>
           
            <div className='bg-white  dark:bg-gray-900 '>
                <div className=' flex justify-center items-center'>

                    <Swiper
                        autoplay={{ delay: 3500 }}
                        modules={[EffectFade]} effect="fade"

                        loop={Infinity}
                        speed={4500}
                        className=' h-[850px] w-screen '
                    >
                        <SwiperSlide className='relative'>
                            <div >
                                <p className='drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[43%]'>CERAMICS</p>
                                <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out  duration-100'>Explore</button>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/NxLS7WD/2150379002-1.jpg' alt="" /></SwiperSlide>

                        <SwiperSlide>
                            <div >
                                <p className='drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[32%]'>CLAY-MADE POTTERY</p>
                                <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out  duration-100'>Explore</button>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/7vWLZxn/2148679107.jpg' alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div >
                                <p className='drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[31%]'>HOME-DECOR POTTERY</p>
                                <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out duration-100'>Explore</button>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/chQLQYW/2151003069.jpg' alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div >
                                <p className=' drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[42%]'>PORCELAIN</p>
                                <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out  duration-100'>Explore</button>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/4YSsnhN/2150529770.jpg' alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className=' mt-24'>
                    <div className='dark:bg-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:text-white dark:text-opacity-85 bg-gradient-to-tr from-gray-200 to-white'>
                        <h3 className=' text-center dark:text-white dark:text-opacity-85 font-bold text-5xl text-red-400 pt-16'>CRAFTED ITEMS</h3>
                        <div className=' flex items-center mt-10 '>
                            <div>
                                <h1 className=' dark:text-white dark:text-opacity-85 text-5xl text-red-400 font-bold '> Have a Look on Our Products</h1>
                            </div>
                            <div className=' grid grid-cols-2 h-[600px] overflow-auto overflow-x-hidden overflow-y-auto gap-6 mx-auto place-items-center'>
                                {
                                    data.map(art => <div key={art._id}>
                                        <div className=" dark:text-black dark:text-opacity-90 dark:bg-gray-100 card rounded-none w-96 bg-base-100 shadow-xl">
                                            <div className=' overflow-hidden '><figure><img src={art.photo} alt="" /></figure></div>
                                            <div className="card-body">
                                                <h2 className="card-title">{art.itemName}</h2>
                                                <p>{art.description}</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/itemdetails/${art._id}`}> <button className=" px-3 py-2 bg-red-500 text-white">Show Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mt-24 mb-24 dark:mb-0 dark:pb-24 '>
                    <h1 className=' text-5xl font-bold dark:text-white dark:text-opacity-80 text-red-400 text-center'>ART & CRAFTS CATEGORY</h1>
                    <div className=' grid grid-cols-3 gap-5 place-items-center mt-16 mx-auto'>
                        {
                            potteryArray.map((sub, idx) =>
                                <div onClick={() => navigate(`home/${sub.name}`)} key={idx} className=" dark:text-black dark:text-opacity-75 card w-96 bg-base-100 shadow-xl rounded-none">
                                    <div className=' overflow-hidden'><figure><img className=' h-64 w-full' src={sub.image} alt="" /></figure></div>
                                    <div className="card-body">
                                        <h2 className="card-title">{sub.name}</h2>
                                        <p>Please Click to Show Details</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;