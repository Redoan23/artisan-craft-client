import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'
import { EffectFade, Autoplay } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
SwiperCore.use([Autoplay]);
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    const { name, email, photo, itemName, subcategoryName, description, price, rating, customization, status, processingTime } = data
    return (
        <div className=' '>
            <div className=' flex justify-center items-center'>
                {/* <div className=' p-[-100px] mx-auto'>
                    <p className=' absolute text-4xl lg:text-9xl z-10 top-28 lg:top-48 left-16 lg:left-80 text-white font-bold text-center '>Artisan's Forge</p>
                    <p className='absolute text-sm lg:text-xl z-10 top-[150px] lg:top-48 left-48 lg:left-80 text-white font-bold text-center'>Art to sense...</p>
                </div> */}

                <Swiper
                    autoplay={{ delay: 3500 }}
                    modules={[EffectFade]} effect="fade"

                    loop={Infinity}
                    speed={4500}
                    className=' h-[850px] w-screen '
                >
                    <SwiperSlide className='relative'>
                        <div >
                            <p className='drop-shadow-2xl text-6xl text-white font-semibold absolute z-10 top-[190px] left-[43%]'>CERAMICS</p>
                            <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out  duration-100'>Explore</button>
                        </div>
                        <img className=' w-full' src='https://i.ibb.co/NxLS7WD/2150379002-1.jpg' alt="" /></SwiperSlide>

                    <SwiperSlide>
                        <div >
                            <p className='drop-shadow-2xl text-6xl text-white font-semibold absolute z-10 top-[190px] left-[32%]'>CLAY-MADE POTTERY</p>
                            <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out  duration-100'>Explore</button>
                        </div>
                        <img className=' w-full' src='https://i.ibb.co/7vWLZxn/2148679107.jpg' alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div >
                            <p className='drop-shadow-2xl text-6xl text-white font-semibold absolute z-10 top-[190px] left-[31%]'>HOME-DECOR POTTERY</p>
                            <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out duration-100'>Explore</button>
                        </div>
                        <img className=' w-full' src='https://i.ibb.co/chQLQYW/2151003069.jpg' alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div >
                            <p className=' drop-shadow-2xl text-6xl text-white font-semibold absolute z-10 top-[190px] left-[42%]'>PORCELAIN</p>
                            <button className=' px-5 py-3 hover:text-red-500 hover:bg-transparent hover:border-2 hover:border-red-500 text-white bg-red-500 absolute z-10 top-72 left-[49%] hover:ease-in-out  duration-100'>Explore</button>
                        </div>
                        <img className=' w-full' src='https://i.ibb.co/4YSsnhN/2150529770.jpg' alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className=' mt-24'>
                <div className=' bg-gradient-to-tr from-orange-100 to-white'>
                    <h3 className=' text-center font-bold text-5xl text-red-400 pt-16'>CRAFTED ITEMS</h3>
                    <div className=' flex items-center mt-10 '>
                        <div>
                            <h1 className=' text-5xl text-red-400 font-bold '> Have a Look on Our Products</h1>
                        </div>
                        <div className=' grid grid-cols-2 h-[600px] overflow-auto gap-6 mx-auto place-items-center'>
                            {
                                data.map(art => <div>
                                    <div className="card rounded-none w-96 bg-base-100 shadow-xl">
                                        <div className=' overflow-hidden'><figure><img src={art.photo} alt="" /></figure></div>
                                        <div className="card-body">
                                            <h2 className="card-title">{art.itemName}</h2>
                                            <p>{art.description}</p>
                                            <div className="card-actions justify-end">
                                                <button className=" px-3 py-2 bg-red-500 text-white ">Show Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;