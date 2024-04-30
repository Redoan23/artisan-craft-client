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
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter'
import { Fade, Slide } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
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

                    <Fade cascade={true}>
                        <Swiper
                            autoplay={{ delay: 4500 }}
                            modules={[EffectFade]} effect="fade"
                            loop={Infinity}
                            speed={1500}
                            className=' lg:h-[850px] md:h-[400px] h-[200px] w-screen '
                        >
                                <SwiperSlide className='relative'>
                                    <div>
                                        <p className='drop-shadow-2xl text-2xl md:text-2xl lg:text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 lg:top-[190px] lg:left-[43%] md:top-32 md:left-[42%] top-[70px] left-[38%] '>CERAMICS</p>

                                        <a href="#category"><button className='px-3 py-2 lg:px-5 lg:py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-28 left-[43%] md:top-44 md:left-[45%] lg:top-72 lg:left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                                    </div>
                                    <img className=' w-full' src='https://i.ibb.co/NxLS7WD/2150379002-1.jpg' alt="" /></SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <p className='drop-shadow-2xl text-xl md:text-2xl lg:text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[70px] left-[24%] md:top-32 md:left-[35%] lg:top-[190px] lg:left-[32%]'>CLAY-MADE POTTERY</p>
                                    <a href="#category"><button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-28 md:top-44 md:left-[45%] left-[38%] lg:top-72 lg:left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                                </div>
                                <img className=' w-full' src='https://i.ibb.co/7vWLZxn/2148679107.jpg' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <p className='drop-shadow-2xl text-xl md:text-2xl lg:text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[54px] left-[19%] md:left-[31%] lg:top-[190px] lg:left-[31%]'>HOME-DECOR POTTERY</p>
                                    <a href="#category"><button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-24 left-[37%] md:left-[44%] lg:top-72 lg:left-[49%] hover:ease-in-out duration-100'>Explore</button></a>
                                </div>
                                <img className=' w-full' src='https://i.ibb.co/chQLQYW/2151003069.jpg' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <p className=' drop-shadow-2xl text-xl md:text-2xl lg:text-6xl dark:text-opacity-70 text-white font-semibold absolute z-10 top-[60px] left-[37%] md:top-36 md:left-[41%] lg:top-[190px] lg:left-[42%]'>PORCELAIN</p>
                                    <a href="#category"><button className=' px-3 py-2 text-center md:px-5 md:py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-24 left-[41%] md:top-48 md:left-[43%]  lg:top-72 lg:left-[49%] hover:ease-in-out duration-100'>Explore</button></a>

                                </div>
                                <img className=' w-full' src='https://i.ibb.co/4YSsnhN/2150529770.jpg' alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </Fade>
                </div>
                <div className=' mt-20 lg:mt-24'>
                    <div className='dark:bg-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-900 dark:text-white dark:text-opacity-85 bg-gradient-to-tr from-gray-200 to-white'>
                        <h3 className=' text-center dark:text-white dark:text-opacity-85 font-bold text-3xl lg:text-5xl text-red-500 pt-16'>CRAFTED {' '}

                            <span>
                                <Typewriter
                                    words={['HEARTS', 'ITEMS']}
                                    typeSpeed={40}
                                    deleteSpeed={40}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h3>
                        <div className=' flex lg:flex-row flex-col gap-7 items-center mt-14 '>
                            <div className=' md:p-10 flex-1 lg:flex-row flex-col space-y-5'>
                                <Fade duration={3000} delay={100}>
                                    <h1 className=' dark:text-white dark:text-opacity-85  text-center lg:text-left text-3xl lg:text-5xl text-red-500 font-bold '> Have a Look on Our Products</h1>
                                    <p className=' text-lg lg:text-left text-center from-neutral-300 mx-auto px-2'>Discover excellence across every category. Elevate your experience and find your perfect match among our handpicked selection. With every product, we promise satisfaction and guarantee a seamless journey from selection to enjoyment. Welcome to a world where choice meets quality – Welcome to Our Product Universe</p>
                                </Fade>
                            </div>
                            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:h-[650px] h-[400px] overflow-auto :overflow-x-hidden :overflow-y-auto gap-5 mx-auto place-items-center'>
                                <Fade direction=' right' duration={2000} delay={300}>
                                    {
                                        data.map(art => <div key={art._id}>
                                            <div className=" dark:text-black dark:text-opacity-90 dark:bg-gray-100 card rounded-none w-[350px] md:w-80 lg:w-96 bg-base-100 shadow-xl">
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
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='category' className=' mt-24 mb-24 dark:mb-0 dark:pb-24 '>
                    <h1 className=' md:text-3xl text-2xl lg:text-5xl font-bold dark:text-white dark:text-opacity-80 text-red-500 text-center'>ARTS & CRAFTS CATEGORIES</h1>
                    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 place-items-center mt-16 mx-auto'>
                        <Fade delay={300} duration={1000}>
                            {
                                potteryArray.map((sub, idx) =>
                                    <div onClick={() => navigate(`home/${sub.name}`)} key={idx} className=" hover:-translate-y-3 duration-500 delay-75 ease-in-out dark:text-black dark:text-opacity-75 card  w-[350px] lg:w-96 bg-base-100 shadow-xl rounded-none">
                                        <div className=' overflow-hidden'><figure><img className=' h-64 w-full' src={sub.image} alt="" /></figure></div>
                                        <div className="card-body">
                                            <h2 className="card-title">{sub.name}</h2>
                                            <p>Please Click to Show Details</p>
                                        </div>
                                    </div>
                                )
                            }
                        </Fade>
                    </div>
                </div>
            </div>
            <div>
                <h1 className=' text-center md:text-3xl text-2xl lg:text-5xl font-bold text-red-500 my-14'> OUR SPECIAL COLLECTIONS</h1>
                <div className='relative bg-[url("https://i.ibb.co/KGmywK8/pottery-form-unsplash.jpg")] h-[1000px] bg-center'>
                    <div>
                        <div className=' flex lg:flex-row flex-col gap-5 '>
                            <Fade delay={300} triggerOnce={true}>
                                <div className=" absolute left-[2%] top-[5%] md:left-[10%] lg:left-[9%] lg:top-[20%] hover:-translate-y-3 duration-500 delay-75 ease-in-out dark:text-black dark:text-opacity-75 card w-[320px] lg:w-96 bg-base-100 shadow-xl rounded-none">
                                    <div className=' overflow-hidden'><figure><img className=' h-64 w-full' src='https://i.ibb.co/F8R7M47/tom-crew-o-Hr-C8-V-XRU4-unsplash.jpg' alt="" /></figure></div>
                                    <div className="card-body">
                                        <h2 className="card-title">Ceramic Tea Cup</h2>
                                        <p>coming soon... </p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade delay={500} triggerOnce={true}>
                                <div className=" absolute top-[48%] left-[12%] md:left-[50%] lg:left-[38%] lg:top-[30%] hover:-translate-y-3 duration-500 delay-75 ease-in-out dark:text-black dark:text-opacity-75 card w-[320px] lg:w-96 bg-base-100 shadow-xl rounded-none">
                                    <div className=' overflow-hidden'><figure><img className=' h-64 w-full' src='https://i.ibb.co/tM62FfX/tom-crew-NUUj-Vj4-YQLA-unsplash.jpg' alt="" /></figure></div>
                                    <div className="card-body">
                                        <h2 className="card-title">Clay-Made Jars</h2>
                                        <p>coming soon... </p>
                                    </div>
                                </div>
                            </Fade>
                            <div>
                                <button onClick={() => toast.info('Comming Soon...')} className='absolute left-[38%] top-[90%] lg:left-[80%] lg:top-[49%] flex gap-1 items-center duration-500 hover:translate-x-2 text-white px-3 py-2 lg:px-5 lg:py-3 text-center bg-red-400'>View All <FaLongArrowAltRight className='ease-out animate-pulse' ></FaLongArrowAltRight> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' my-28'>
                <h1 className=' text-center font-bold text-red-500 md:text-3xl text-2xl lg:text-5xl pb-5'>OUR {''} <span>
                    <Typewriter
                        words={['TRUE', 'FAKE']}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span> SPONSORS
                </h1>
                <Marquee  >
                    <div className=' flex gap-8 md:gap-16 lg:gap-60 my-6'>
                        <div> <img className=' h-10 w-32 pl-5 lg:pl-0 ' src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png" alt="" /></div>
                        <div><img className=' h-10 w-48' src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png" alt="" /></div>
                        <div><img className=' h-10 w-28' src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png" alt="" /></div>
                        <div><img className=' h-10 w-24' src="https://www.react-fast-marquee.com/static/media/pennsylvania.8c9f4108.png" alt="" /></div>
                    </div>
                </Marquee>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;