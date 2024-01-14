import React from 'react'
import { Carditem } from '../../data/Carditem'
 
const Card = () => {
    return (
        <div className='w-full md:container mx-auto flex items-center justify-center flex-wrap gap-5 py-20'>
            {
                Carditem.map((item) => (
                    <div className='w-[22rem] border-s-8 border-[#389379] rounded-xl card-color flex items-center p-2 px-4 gap-2 '>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-base'>{item.name}</p>
                            <h1 className='font-bold text-[#211F57] text-3xl'>{item.record}</h1>
                            <p className='text-xl'>{item.fas}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Card
