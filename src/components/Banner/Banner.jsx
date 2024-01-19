import React, { useEffect } from 'react'
import img1 from '../../Assets/Home/1.svg'
 
import Card from '../Card/Card'
import Button from '../Button/Button'

const Banner = () => {


    return (
        <div className='w-full bg-img overflow-hidden py-10 md:py-24 '>
            <div className=" w-full flex flex-col-reverse items-center md:justify-around md:flex-row px-2 md:10 lg:px-[4.5rem] py-5 md:pt-10 mx-auto">
                <div className="flex items-center py-20 md:w-1/2 sm:px-5 md:px-2 md:pb-20 md:pt-10 ">
                    <div className="text-left">
                        <h2 className="text-[35px] herr-text font-medium leading-[3.7rem]  text-gray-800 md:text-[48px]">
                            Make your hospital or clinic Digital.
                        </h2>
                        <p style={{lineHeight:"1.5rem"}} className="w-full text-sm text-black sm:text-lg md:text-[16px] ">
                            Your trusted partner in digital transformation. Our innovative platform seamlessly integrates into the workflows of both hospitals and clinics, offering a comprehensive solution for patient management.
                        </p>
                        <div className="flex flex-col justify-around py-2 gap-5 w-full  ">
                           <Button text='Get Started' color='#6CEBC6' />
                            <p className='text-xs md:text-sm pt-5'>Our app is out in the market. Download now!</p>
                        </div>
                        <div className="items-center flex gap-3  w-full flex-row">
                            <a href="#" className="md:w-fit bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-3 py-1 md:py-[2px] ">
                                <i className="fa-brands fa-google-play text-xl md:text-3xl px-1 md:px-1"></i>
                                <div className=" rtl:text-right">
                                    <div className="text-[10px] uppercase md:tracking-widest">Go it on</div>
                                    <div className="-mt-1 text-nowrap text-sm md:text-xl font-normal">Googel Play</div>
                                </div>
                            </a>
                            <a href="#" className=" md:w-fit bg-[#11111E]  text-white rounded-lg inline-flex items-center  px-3 py-[2px] ">
                                <i className="fa-brands fa-apple  text-2xl md:text-3xl px-1 md:px-2"></i>
                                <div className="text-center rtl:text-right ">
                                    <div className="text-[10px] md:tracking-widest">Download on the</div>
                                    <div className="-mt-1  font-sans text-sm md:text-xl font-semibold">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 md:w-1/2 lg:pb-20 lg:pt-10 ">   
                  <img  className='w-full '  src={img1} />
                </div>
            </div>
            <div className='px-2'>
                <Card />
            </div>
        </div>
    )
}

export default Banner
