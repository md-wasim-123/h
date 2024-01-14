import React, { useState } from 'react'
import data from '../../data/Features'
 
const Features = () => {

    return (
        <div className='w-full '>
            <h1 className='text-3xl font-normal px-20 py-8  md:px-20'>Features</h1>
            <div className='flex items-center flex-wrap gap-5 px-1 justify-center  mx-auto'>
                {data.map((item) => (
                    <div key={item.img} className='w-[350px] fea-sha flex items-center justify-center flex-col h-[370px] rounded-lg py-20 px-4'>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold p-2'>{item.title}</h1>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
