import React from 'react'
import { Carditem } from '../../data/Carditem'
 
const Card = () => {
    return (
        <div className='w-full md:container mx-auto flex items-center justify-center flex-wrap gap-5 pt-7 pb-16' >
            {
                Carditem.map((item) => (
                    <div key={item.id} className='w-full md:w-60 lg:w-[22rem]  border-s-8 border-[#389379] rounded-xl card-color flex items-center p-2 lg:px-4 gap-2 '>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base'>{item.name}</p>
                            <h1 className='font-bold text-[#211F57] text-xl lg:text-3xl'>{item.record}</h1>
                            <p className='text-base lg:text-xl'>{item.fas}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Card
