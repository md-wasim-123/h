import React from 'react'
import { Link } from 'react-router-dom'
import Connect_form from '../../components/Connect/Connect_form'
import img3 from '../../Assets/About/Linkedin.png'
import img1 from '../../Assets/About/aboutimg.png'
import img2 from '../../Assets/About/aboutimg1.png'
import about from '../../Assets/About/aboutlogo.png'


const About = () => {
  return (
    <div>
      {/* //herr */}
      <div className='md:container md:mx-auto flex items-center my-16 w-full flex-col-reverse md:flex-row md:justify-between  md:py-14  md:ps-20'>
        <div className='w-full lg:w-1/2  py-3  px-5 md:px-2 '>
          <div className='hidden  md:block flex-col  '>
            <Link to={'/'}><i className="fa-solid fa-arrow-left text-3xl pb-10"></i></Link>
            <h1 className='text-2xl  py-1 font-medium'>About us</h1>
          </div>
          <p className='text-justify text-base md:text-lg tracking-tight'>At HealTether, we're on a mission to revolutionize healthcare, making it convenient, accessible, and high-quality for everyone. Our innovative platform empowers individuals by bridging the gap between patients and healthcare providers, putting the power of healthcare in the palm of your hand.</p> 
          <p className='text-justify text-base md:text-lg tracking-tight'>Our mission is to create a seamless connection between individuals and a network of qualified medical professionals, providing access to a wide range of medical services while offering personalized care tailored to specific needs.</p>
        </div>
        <div className='w-full lg:w-1/2   '>
          <div className='flex sm:block md:hidden flex-col   p-4'>
            <i className="fa-solid fa-arrow-left"></i>
            <h1 className='text-2xl  py-1 font-medium'>About us</h1>
          </div>
          <div className='w-60 flex items-center justify-center mx-auto'>
          <img className='w-full' src={about} alt="" />
          </div>
        </div>
      </div>
      {/* //box */}
      <div className='md:container md:mx-auto'>
        <h1 className='w-full text-3xl text-center py-10 font-semibold'>Founding Team of HealTether</h1>
        <div className='flex items-center flex-wrap justify-center lg:justify-around p-5 md:p-10 gap-10'>
          <div className='card  md:w-1/3'>
            <div className='img'>
              <img src={img1} alt="" />
            </div>
            <div className='content'>
              <h1 className='text-xl md:text-2xl font-semibold py-1'>Dr. Surya Kapoor - Founder & CEO</h1>
              <p className='text-sm md:text-lg text-justify'>Dr. Kapoor is a seasoned healthcare professional with a background in internal medicine. She envisioned HealTether to bridge the gap between patients and healthcare providers, driven by her passion for making healthcare more accessible.</p>
              <img src={img3} alt="" />
            </div>
          </div>
          <div className='card md:w-1/3'>
            <div className='card'>
              <div className='img'>
                <img src={img2} alt="" />
              </div>
              <div className='content'>
                <h1 className='text-xl md:text-2xl font-semibold py-1'>Dr. Surya Kapoor - Founder & CEO</h1>
                <p className='text-sm md:text-lg text-justify'>Dr. Kapoor is a seasoned healthcare professional with a background in internal medicine. She envisioned HealTether to bridge the gap between patients and healthcare providers, driven by her passion for making healthcare more accessible.</p>
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Connect_form />
    </div>
  )
}

export default About
