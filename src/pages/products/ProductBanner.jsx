import React from 'react';
// import Card from '../home/Card';

const ProductBanner = () => {
    return (
        <div>
            <div className='w-full h-auto bg-img p-1 md:px-10 md:py-5 '>
                <div className="relative flex flex-col items-center md:justify-around md:flex-row px-8 py-10 md:py-20 mx-auto">
                    <div className="flex items-center py-20 md:w-1/2 md:pb-20 md:pt-10 ">
                        <div className="text-left">
                            <h2
                                className="text-[25px] herr-text font-bold leading-[3rem]  text-gray-800  md:text-[40px]">
                                Make Your Hospital Or Clinic Digital.
                            </h2>
                            <p className="w-full mx-auto mt-3 text-sm text-black font-normal sm:text-lg md:mt-5 md:text-[18px] md:max-w-6xl">
                                Your trusted partner in digital transformation. Our innovative platform seamlessly integrates into the workflows of both hospitals and clinics, offering a comprehensive solution for patient management.
                            </p>
                            <div className="flex flex-col justify-around  gap-5 ">
                                <button type="button" className="text-white bg-[#32856E] w-36  mt-5 py-[10px] font-medium rounded-md">
                                    Get Started
                                </button>
                                <p className='text-xs md:text-sm'>Our app is out in the market. Download now!</p>
                                <div class="items-center flex gap-3 flex-col md:flex-row">
                                    <a href="#" class="w-full sm:w-auto bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
                                        <i class="fa-brands fa-google-play text-xl md:text-2xl px-1"></i>
                                        <div class="text-left rtl:text-right">
                                            <div class="mb-1 text-xs uppercase">Go it on</div>
                                            <div class="-mt-1 font-sans text-sm font-semibold">Googel Play</div>
                                        </div>
                                    </a>
                                    <a href="#" class="w-full sm:w-auto bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
                                        <i class="fa-brands fa-apple  text-xl md:text-2xl px-1"></i>
                                        <div class="text-left rtl:text-right ">
                                            <div class="mb-1 text-xs">Download on the</div>
                                            <div class="-mt-1 font-sans text-sm font-semibold">App Store</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block py-20 md:w-1/2 md:pb-20 md:pt-10 ">
                        <div className="relative w-full rounded  md:p-2">
                            <div className="rounded-lg bg-white text-black w-[43vw]">

                            </div>
                        </div>
                    </div>
                </div>
                {/* <Card /> */}
            </div>

        </div>
    );
}

export default ProductBanner;
