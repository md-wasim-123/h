import React from 'react';
// import ArrowComp from '../ArrowComp';

import abha1 from '../../Assets/Abha/1.svg';
import abha2 from '../../Assets/Abha/2.svg';
import abha3 from '../../Assets/Abha/3.svg';
const Abha = () => {
  return (
    <div className='pt-32'>

      <div className=' mx-4 md:mx-16 my-10'>
        <h1 className='text-xl md:text-3xl font-medium'>Discover Ayushman Bharat Health Account (ABHA)</h1>
        <p className=' text-xs md:text-base font-normal'>"ABHA, under the Ayushman Bharat Digital Mission, is a groundbreaking initiative by the Indian government. It offers individuals a unique health identifier and a centralized digital health account. Learn more about the benefits and how ABHA is revolutionizing healthcare."</p>
      </div>
      <div className=' mx-4 md:mx-16 my-6'>
        <h1 className=' text-xl font-semibold my-4'>Key Features</h1>
        <div className=' flex flex-col md:flex-row gap-10 justify-between'>
          <div className='flex flex-col justify-center items-center'>
            <img src={abha1} alt="" />
            <p className=' text-xs md:text-base font-normal'>Unique Health Identifier (UHI)</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={abha2} alt="" />
            <p className='text-xs md:text-base font-normal'>Centralized Health Account</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src={abha3} alt="" />
            <p className='text-xs md:text-base font-normal'>Ayushman Bharat Health ID</p>
          </div>
        </div>
      </div>
      <div className=' mx-4 md:mx-16 my-10'>
        <h1 className=' text-xl font-semibold my-4'>How to Register</h1>
        <div>
          <ul className=' mx-5 flex flex-col gap-3'>
            <li className=' list-disc text-xs md:text-base flex  '>
              <div className='flex items-center justify-center gap-2'>
                <i class="fa-solid fa-circle text-[5px]"></i>
                <p className='font-semibold me-1'>
                  Step 1: </p>
              </div>
              <p>Visit the official Ayushman Bharat website.</p>
            </li>

            <li className=' list-disc text-xs md:text-base flex'>
              <div className='flex items-center justify-center gap-2'>
                <i class="fa-solid fa-circle text-[5px]"></i>
                <p className='font-semibold me-1'>Step 2:</p>
              </div>
              <p>Follow the registration process to create your ABHA account.</p>
            </li>
            <li className=' list-disc text-xs md:text-base flex'>
              <div className='flex items-center justify-center gap-2'>
                <i class="fa-solid fa-circle text-[5px]"></i>
                <p className='font-semibold me-1'>
                  Step 3:</p>
              </div>
              <p>Verify your identity and link your health records to your unique identifier.</p>
            </li>
          </ul>
        </div>
        <div className=' flex items-center justify-center'>
          <button className=' bg-[#6CEBC6] text-black font-medium px-6 py-3 rounded my-6 text-base'>Explore Abha on Official Website</button>
        </div>
      </div>

    </div>
  );
}

export default Abha;
