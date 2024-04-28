import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './NavFooter/home.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'
import { EffectFade, Autoplay } from 'swiper/modules';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <div className='bg-white dark:bg-gray-700 scroll-smooth dark:text-white dark:text-opacity-70'>

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
                                <a href="#category"><button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/NxLS7WD/2150379002-1.jpg' alt="" /></SwiperSlide>

                        <SwiperSlide>
                            <div >
                                <p className='drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[32%]'>CLAY-MADE POTTERY</p>
                                <a href="#category"><button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/7vWLZxn/2148679107.jpg' alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div >
                                <p className='drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[31%]'>HOME-DECOR POTTERY</p>
                                <a href="#category"><button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/chQLQYW/2151003069.jpg' alt="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <div >
                                <p className=' drop-shadow-2xl text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[190px] left-[42%]'>PORCELAIN</p>
                                <a href="#category"><button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                            </div>
                            <img className=' w-full' src='https://i.ibb.co/4YSsnhN/2150529770.jpg' alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className=' mt-24'>
                    <div className='dark:bg-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:text-white dark:text-opacity-85 bg-gradient-to-tr from-gray-200 to-white'>
                        <h3 className=' text-center dark:text-white dark:text-opacity-85 font-bold text-5xl text-red-500 pt-16'>CRAFTED ITEMS</h3>
                        <div className=' flex items-center mt-14 '>
                            <div className=' md:p-10 flex-1 space-y-5'>
                                <h1 className=' dark:text-white dark:text-opacity-85 text-5xl text-red-500 font-bold '> Have a Look on Our Products</h1>
                                <p className=' text-lg from-neutral-300 mx-auto'>Discover excellence across every category. Elevate your experience and find your perfect match among our handpicked selection. With every product, we promise satisfaction and guarantee a seamless journey from selection to enjoyment. Welcome to a world where choice meets quality – Welcome to Our Product Universe</p>
                            </div>
                            <div className=' grid grid-cols-2 h-[650px] overflow-auto overflow-x-hidden overflow-y-auto gap-5 mx-auto place-items-center'>
                                {
                                    data.map(art => <div key={art._id}>
                                        <div className=" dark:text-black dark:text-opacity-90 dark:bg-gray-100 card rounded-none w-96 bg-base-100 shadow-xl">
                                            <div className=' overflow-hidden '><figure><img src={art.photo} alt="" /></figure></div>
                                            <div className="card-body">
                                                <h2 className="card-title">{art.itemName}</h2>
                                                <p>{art.description}</p>
                                                <div className="card-actions justify-end">
                                                    <Link to={`/itemdetails/${art._id}`}> <button className="hover:-translate-x-1 duration-500 delay-75 px-3 py-2 bg-red-500 text-white">Show Details</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div id='category' className=' mt-24 mb-24 dark:mb-0 dark:pb-24 '>
                    <h1 className=' text-5xl font-bold dark:text-white dark:text-opacity-80 text-red-500 text-center'>ART & CRAFTS CATEGORY</h1>
                    <div className=' grid grid-cols-3 gap-5 place-items-center mt-16 mx-auto'>
                        {
                            potteryArray.map((sub, idx) =>
                                <div onClick={() => navigate(`home/${sub.name}`)} key={idx} className=" hover:-translate-y-3 duration-500 delay-75 ease-in-out dark:text-black dark:text-opacity-75 card w-96 bg-base-100 shadow-xl rounded-none">
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
            <div>
                <h1 className=' text-center text-5xl font-bold text-red-500 my-14'> OUR SPECIAL COLLECTIONS</h1>
                <div className='relative bg-[url("https://i.ibb.co/KGmywK8/pottery-form-unsplash.jpg")] h-[1000px] bg-center'>
                    <div>

                        <div className=' flex gap-5 '>
                            <div className=" absolute left-[9%] top-[20%] hover:-translate-y-3 duration-500 delay-75 ease-in-out dark:text-black dark:text-opacity-75 card w-96 bg-base-100 shadow-xl rounded-none">
                                <div className=' overflow-hidden'><figure><img className=' h-64 w-full' src='https://i.ibb.co/F8R7M47/tom-crew-o-Hr-C8-V-XRU4-unsplash.jpg' alt="" /></figure></div>
                                <div className="card-body">
                                    <h2 className="card-title">Ceramic Tea Cup</h2>
                                    <p>coming soon... </p>
                                </div>
                            </div>
                            <div className=" absolute left-[38%] top-[30%] hover:-translate-y-3 duration-500 delay-75 ease-in-out dark:text-black dark:text-opacity-75 card w-96 bg-base-100 shadow-xl rounded-none">
                                <div className=' overflow-hidden'><figure><img className=' h-64 w-full' src='https://i.ibb.co/tM62FfX/tom-crew-NUUj-Vj4-YQLA-unsplash.jpg' alt="" /></figure></div>
                                <div className="card-body">
                                    <h2 className="card-title">Clay-Made Jars</h2>
                                    <p>coming soon... </p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => toast.info('Comming Soon...')} className='absolute left-[80%] top-[49%] flex gap-1 items-center duration-500 hover:translate-x-2 text-white px-5 py-3 text-center bg-red-400'>View All <FaLongArrowAltRight className='ease-out animate-pulse' ></FaLongArrowAltRight> </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;