import React from 'react';
import KeyFeatures from './KeyFeatures';
import Product_User from '../../components/Testimonials/Product_User'
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import Button from '../../components/Button/Button';
// images

import first from '../../Assets/product/1.gif'
import second from '../../Assets/product/chat.gif'
import third from '../../Assets/product/analytics.gif'


const Products = () => {

  return (
    <div>
      <Banner />
      <Features />
      <div className=' h-auto'>
        <div className='my-10'>
          <h1 className=' text-center font-semibold text-[28px] kw:text-xl'>For individual practitioners, clinics and hospitals</h1>
          <p className=' text-center text-base font-normal'>One stop solution for your Practice management</p>
        </div>

        {/* ==================== */}
        <div className=' flex flex-col sm:flex-row w-[80%] mx-auto'>
          <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Appointments Management</h1>
            </div>
            <ul className='mx-5'>
              <li className=' list-disc my-2'><b>Schedule</b> appointments quickly</li>
              <li className=' list-disc my-2'>Cancel or Reschedule appointments.</li>
              <li className=' list-disc my-2'>Schedule <b>follow-up</b> appointments.</li>
            </ul>
          </div>
          <div className=' md:w-[50%] w-[100%]'>
            <img src={first} />
          </div>
        </div>

        <div className=' flex w-[80%] kw:flex-col  mx-auto my-6 '>
            <div className=' w-[50%] kw:w-[80%] flex flex-col justify-center'>
                <div className=' border-l-4 border-black my-4'>
                  <h1 className=' py-3 px-2 text-[28px] font-medium'>Store, Access & Analyze records</h1>
                </div>
                <ul className='mx-5'>
                  <li className=' list-disc my-2'><b>Patient records via UHI integration -</b> to deliver appropriate and wholistic care to patients.</li>
                  <li className=' list-disc my-2'><b>Appointments records -</b> to maintain and analyze them.</li>
                  <li className=' list-disc my-2'><b>Payment records -</b> to analyze get revenue insights.</li>
                </ul>
            </div>
            <div className=' w-[50%] kw:w-[100%] h-full flex flex-col justify-center '>
              <div className=' border-l-4 border-black my-4'>
                <h1 className=' py-3 px-2 text-[28px] font-medium'>Manage Staff</h1>
              </div>
              <ul className='mx-5'>
                <li className=' list-disc my-2'><b>Maintain</b> Staff <b>records</b> digitally.</li>
                <li className=' list-disc my-2'>Get <b>Privilege protected features</b> to allow staff use right features.</li>
              </ul>
            </div>
        </div>
        
        <div className=' flex flex-col sm:flex-row w-[80%] mx-auto'>
          <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Connect with Patients</h1>
            </div>
            <ul className='mx-5'>
              <li className=' list-disc my-2'>Now no more waiting in long queue. Easy appointment scheduling with integration of <b>Whatsapp</b>.</li>
              <li className=' list-disc my-2'><b>Send prescriptions, receipts</b> and other documents to patients on Whatsapp.</li>
              <li className=' list-disc my-2'>Forage stronger bonds with your patients.</li>
            </ul>
          </div>
          <div className=' md:w-[50%] w-[100%]'>
            <img src={second} />
          </div>
        </div>

        <div className=' flex w-[80%] kw:flex-col  mx-auto my-6 '>
            <div className=' w-[50%] kw:w-[80%] flex flex-col justify-center'>
                <div className=' border-l-4 border-black my-4'>
                  <h1 className=' py-3 px-2 text-[28px] font-medium'>Receive payments</h1>
                </div>
                <ul className='mx-5'>
                  <li className=' list-disc my-2'>Now receive payments <b>online securely.</b></li>
                  <li className=' list-disc my-2'>You can also receive them <b>offline by cash</b> and maintain the records for later use.</li>
                  
                </ul>
            </div>
           
        </div>

        <div className=' flex flex-col sm:flex-row w-[80%] mx-auto'>
          <div className=' w-[50%] kw:w-[100%] flex flex-col justify-center'>
            <div className=' border-l-4 border-black my-4'>
              <h1 className=' py-3 px-2 text-[28px] font-medium'>Get detailed Analytics Report</h1>
            </div>
            <ul className='mx-5'>
              <li className=' list-disc my-2'>You can analyze the <b>appointment data, payments data </b>to get valuable insights on business.</li>
              <li className=' list-disc my-2'>Analyze the <b>patient data</b> to derive valuable insights.</li>
            </ul>
          </div>
          <div className=' md:w-[50%] w-[100%]'>
            <img src={third} />
          </div>
        </div>


      </div>
      <KeyFeatures />
      <Product_User />
      <div className='bg-img-fea h-[250px] flex flex-col justify-center items-center'>
        <h1 className=' font-semibold text-center text-lg md:text-3xl herr-text'>Ready to embark on the journey of transformation?</h1>
        <p className=' text-base font-normal pb-5'>Join our network of doctors and </p>
        <Button text='Get Started' color='#6CEBC6' />
      </div>
    </div>
  );
}

export default Products;
