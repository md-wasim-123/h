import React from 'react';
import KeyFeatures from './KeyFeatures';
import Product_User from '../../components/Testimonials/Product_User'
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import Button from '../../components/Button/Button';
// images

import first from '../../Assets/product/Analysis1.gif'
import second from '../../Assets/product/Chat1.gif'
import third from '../../Assets/product/appointments1.gif'


const Products = () => {

  return (
    <div>
      <Banner />
      <Features />
      <div className=' h-auto'>
        <div className='my-10 px-5 md:px-10'>
          <h2 className="text-3xl text-center font-normal py-3">Our Product</h2>
          <h1 className=' text-center font-semibold text-[28px] kw:text-xl'>For individual practitioners, clinics and hospitals</h1>
          <p className=' text-center text-base font-normal'>Streamline your practice management with features that help you maintain and analyze appointment records, payment records, and even keep track of your clinic staff members—all in one centralized platform.</p>
        </div>

        {/* ==================== */}
        <div className=' flex flex-col sm:flex-row w-[80%] mx-auto md:gap-10 '>
          <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Streamlined Appointment Management</h1>
            </div>
            <p className='text-[16px]'>
              Effortlessly schedule, cancel, and reschedule appointments with our user-friendly interface. Our advanced scheduling system allows for quick and efficient appointment management, ensuring your clinic operates seamlessly.
            </p>
          </div>
          <div className=' md:w-[50%] w-[100%]'>
            <img src={first} />
          </div>
        </div>

        <div className=' flex w-[80%] kw:flex-col  mx-auto my-6  md:gap-10'>
          <div className=' w-[50%] kw:w-[80%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Follow-Up Appointments Made Easy</h1>
            </div>
            <p className='text-[16px]'>
              Never miss a follow-up again! Our system allows you to schedule and manage follow-up appointments effortlessly, ensuring continuity of care for your patients.
            </p>
          </div>
          <div className=' w-[50%] kw:w-[100%] h-full flex flex-col justify-center '>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Secure UHI Integration</h1>
            </div>
            <p className='text-[16px]'>
              Store, access, and analyze patient records securely through seamless UHI integration. Experience peace of mind knowing that patient data is handled with the utmost security and compliance.
            </p>
          </div>
        </div>

        <div className=' flex flex-col sm:flex-row w-[80%] mx-auto md:gap-10'>
          <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'> WhatsApp Integration for Enhanced Communication</h1>
            </div>
            <ul className='text-[16px]'>
              <li className='my-2'>Take patient communication to the next level!</li>
              <li className='my-2'>Our solution allows doctors and staff members to book appointments, send prescriptions, receipts, and appointment reminders directly through WhatsApp. </li>
              <li className='my-2'>Provide personalized and effective healthcare services with ease.</li>
            </ul>
          </div>
          <div className=' md:w-[50%] w-[100%]'>
            <img src={second} />
          </div>
        </div>
        <div className=' flex w-[80%] kw:flex-col  mx-auto my-6 md:gap-10'>
          <div className=' w-[50%] kw:w-[80%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Secure Payment Processing</h1>
            </div>
            <p className='text-[16px]'>Receive payments securely and effortlessly with our integrated payment processing system. Say goodbye to the hassles of traditional payment methods and offer your patients a seamless payment experience.</p>
          </div>
        </div>
        <div className=' flex flex-col sm:flex-row w-[80%] mx-auto md:gap-10'>
          <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Data-Driven Insights</h1>
            </div>
            <ul className='text-[16px]'>
              <li className=' my-2'>Empower your clinic with valuable insights!</li>
              <li className='my-2'>Access detailed analytics reports on appointments, payments, and patient data to make informed decisions and optimize your clinic's performance.</li>
            </ul>
          </div>
          <div className=' md:w-[50%] w-[100%]'>
            <img src={third} />
          </div>
        </div>


      </div>
      <KeyFeatures />
      <Product_User />
      <div className='bg-img-fea h-[250px] flex flex-col justify-center items-center text-center px-5'>
        <h1 className=' font-semibold  text-lg md:text-3xl herr-text md:px-20'>Ready to embark on a journey of transformative healthcare experiences?</h1>
        <p className='text-sm md:text-base font-normal pb-5'> Our SaaS solution is not just a tool; it's a partner in your journey towards providing exceptional healthcare services.</p>
        <Button text='Get Started' color='#6CEBC6' />
      </div>
    </div>
  );
}

export default Products;
