import React from 'react'
import Button from '../Button/Button'

const Patient = () => {
    return (
        <div className='lg:container lg:mx-auto w-full bg-[#32856E] my-10  py-5 md:p-16 px-5 md:px-10 lg:px-20 bg-img-fea '>
            <h1 className='text-2xl md:text-[2.2rem] all-text font-semibold text-white'>Elevate Patient Care with HealTether</h1>
            <p className='text-base text-balance p-1 text-[#6CEBC6]'>"New heights with HealTether – your all-in-one solution for seamless healthcare management. From effortless appointment scheduling to secure patient data management, our platform is designed to enhance your practice's efficiency and focus on delivering top-notch care. Join a community of forward-thinking healthcare professionals who trust HealTether to transform their workflow.</p>
            <div className='flex items-center justify-center md:justify-start'>
            <Button text='Sign up now' color='#FDFCFD'/>
            </div>
        </div>

    )
}

export default Patient
