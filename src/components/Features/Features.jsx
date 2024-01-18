import React, { useState } from 'react'
import data from '../../data/Features'
 
const Features = () => {

    return (
        <div className='w-full container mx-auto max-w-7xl '>
            <h1 className='text-3xl font-medium px-6 py-3 text-center  md:px-20'>Features</h1>
            <div className='grid grid-cols-2 md:grid-cols-3  gap-5 w-full md:px-5 lg:px-16'>
                {data.map((item) => (
                    <div key={item.img} className='w-[45vw] md:w-[245px] lg:w-[350px] mx-auto fea-sha flex items-center md:justify-center flex-col h-auto lg:h-[300px] rounded-lg py-5 lg:py-20 px-2 md:px-4 gap-3 my-3'>
                        <div className='w-36 md:w-52'>
                            <img className='w-full object-cover' src={item.img} alt="" />
                        </div>
                        <div className='text-center '>
                            <h1 className='text-base md:text-xl font-bold p-2'>{item.title}</h1>
                            <p className='text-xs md:text-[14px] font-normal leading-5'>{item.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
