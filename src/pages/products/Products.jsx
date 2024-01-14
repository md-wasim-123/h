import React from 'react';
import KeyFeatures from './KeyFeatures';
import ProductDiv, { ProductNotBlue } from './ProductDiv';
import Product_User from '../../components/Testimonials/Product_User'

// import Features from '../home/Features';


// images
import ourProduct1 from '../../Assets/product/ourProduct1.png';
import ourProduct2 from '../../Assets/product/ourProduct2.png';
import ourProduct3 from '../../Assets/product/ourProduct3.png';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';

// import productBanner from '../images/product/product-banner.png'

const productData = [
  {
    img: ourProduct1,
    heading: 'Appointments Management',
    list1: 'Schedule appointments quickly',
    list2: 'Cancel or Reschedule appointments.',
    list3: ' Schedule follow-up appointments.',
    btn: 'Get Started'
  },

  {
    img: ourProduct2,
    heading: 'Connect with Patients',
    list1: ' Now no more waiting in long queue. Easy appointment scheduling with integration of Whatsapp.',
    list2: 'Send prescriptions, receipts and other documents to patients on Whatsapp.',
    list3: ' Forage stronger bonds with your patients.',
    btn: 'Get Started'
  },

  {
    img: ourProduct3,
    heading: 'Get detailed Analytics Report',
    list1: 'You can analyze the appointment data, payments data to get valuable insights on business.',
    list2: 'Analyze the patient data to derive valuable insights.',
  }

]


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

        <ProductDiv data={productData[0]} />
        <ProductNotBlue />
        <ProductDiv data={productData[1]} />
        <ProductNotBlue />
        <ProductDiv data={productData[2]} />
      </div>
      <KeyFeatures />
      <Product_User />
      <div className='bg-img-fea h-[250px] flex flex-col justify-center items-center'>
        <h1 className=' font-semibold text-center text-lg md:text-3xl herr-text'>Ready to embark on the journey of transformation?</h1>
        <p className=' text-base font-normal'>Join our network of doctors and </p>
        <button className=' bg-[#6CEBC6] text-black font-medium rounded py-3 px-6 my-6'>Get Started</button>
      </div>
    </div>
  );
}

export default Products;
