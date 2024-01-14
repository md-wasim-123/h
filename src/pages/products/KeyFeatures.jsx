import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './keyFeature.Module.css';
// import './keyFeature.css'
import Swiperdata from '../../data/SwiperData'



const KeyFeatures = () => {
    return (
        <div className='bg-red-500  '>

            <div className='bg-[#32856E] my-10 bg-img-fea py-6'>
                <h1 className='ml-[0.5rem] sm:ml-[2rem] md:ml-[4rem] text-3xl font-medium text-white'>Key features</h1>
                {/* h-[18rem] */}
                <div className='flex flex-col md:flex-row ml-[0.5rem] sm:ml-[2rem] md:ml-[4rem]  items-center justify-center'>
                    <div className='w-[100%] md:w-[30%] lg:w-[50%]'>
                        <h1 className='text-2xl md:text-[2.2rem] font-semibold text-white'>
                            Store your data securely.
                        </h1>
                        <p className='text-base text-balance p-1 text-white'>
                            Your trusted partner in digital transformation. Our innovative platform seamlessly integrates into the workflows of both hospitals and clinics, offering a comprehensive solution for patient management.
                        </p>
                        <button className='bg-[#F5F5F5] p-2 my-2 rounded-md font-bold tracking-tight px-7 shadow-2xl'>
                            Sign up now
                        </button>
                    </div>
                    {/* carousel div  lg:w-[50%]*/}
                    <div className='   w-[95%] md:w-[70%] lg:w-[50%] overflow-hidden'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 10000 }}
                            pagination={{ clickable: true }}
                            className=' pb-[2rem] w-[100%] overflow-hidden md:pr-[7rem]'
                        >

                            {
                                Swiperdata?.map((item, index) => {
                                    return (
                                        <SwiperSlide className='flex md:flex-row my-2 justify-center items-center w-[90%] rounded-lg'
                                            key={index}
                                        >
                                            <div className=' w-[30%] py-10 mx-1 flex justify-center items-center'>
                                                <img src={item.img} alt="product slideimage" className=' w-[40px h-[40px]]' width={20} />
                                            </div>

                                            <div className=' w-[70%] flex flex-col justify-center mx-4 '>
                                                <h1 className=' text-xl font-semibold text-start'>{item.title}</h1>
                                                <p className=' text-sm font-normal text-start'>{item.desc}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures
