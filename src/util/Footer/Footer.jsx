import React from 'react'
import footerimg from '../../Assets/Svg/footer.svg'
const Footer = () => {
  return (
    <footer className="bg-[#32856E] rounded-tl-3xl rounded-tr-3xl p-3 ">
      <div className="grid md:col-span-3 lg:grid-cols-3 lg:container lg:mx-auto lg:p-5 lg:px-10 ">
        <div className="col-span-4 md:col-span-1 lg:col-span-1 p-5 ">
          <a href="#" className="flex items-center">
            <img className='' src={footerimg} alt="FlowBite Logo" />
          </a>
          <p className='text-[#FDFCFD] py-5 text-base'>Join us on this transformative journey as we redefine healthcare together. </p>

          <div className='hidden lg:block'>
            <div className="flex items-center flex-wrap gap-3 md:gap-5 flex-row">
              <a href="#" className="max-w-7xl sm:w-auto bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center p-1 ">
                <i className="fa-brands fa-google-play text-xl md:text-2xl px-1"></i>
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xs uppercase">Go it on</div>
                  <div className="-mt-1 font-sans text-lg font-semibold">Googel Play</div>
                </div>
              </a>
              <a href="#" className="w-full sm:w-auto bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-3 md:px-6 py-2.5">
                <i className="fa-brands fa-apple  text-xl md:text-2xl px-1"></i>
                <div className="text-left rtl:text-right ">
                  <div className="mb-1 text-[10px]">Download on the</div>
                  <div className="-mt-1 font-sans text-sm md:text font-semibold">App Store</div>
                </div>
              </a>
            </div>
            <div className='flex lg:justify-start gap-3 p-3'>
              <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
                <button>
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
                <button>
                  <i className="fa-brands fa-twitter"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
                <button>
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
                <button>
                  <i className="fa-brands fa-instagram"></i>
                </button>
              </div>
              <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
                <button>
                  <i className="fa-brands fa-youtube"></i>
                </button>
              </div>

            </div>
            <div className="">
              <p className="text-base text-[#FDFCFD] ">© Copyright 2024 HealTether. All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 lg:col-span-1 p-5'>
          <h2 className="mb-2 text-base font-semibold text-[#4BBE9E] ">Sitemap</h2>
          <div className='flex lg:items-center flex-col lg:flex-row lg:gap-20'>
            <ul className="text-[#FDFCFD] text-lg  font-normal">
              <li className="py-1">
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:underline">Products</a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:underline">Help</a>
              </li>
            </ul>

            <ul className='text-[#FDFCFD] text-lg  font-normal'>
              <li className="py-1">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:underline">FAQs</a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:underline">Complaints</a>
              </li>
            </ul>

          </div>
        </div>
        <div className='col-span-4 md:col-span-1 lg:col-span-1 p-5 '>
          <h2 className="mb-2 text-base font-semibold text-[#4BBE9E]">Contact</h2>
          <ul className="text-[#FDFCFD] font-normal">
            <li className="py-2 text-lg">
              <a href="#" className="hover:underline "><i className="fa-regular fa-envelope-open me-2 text-xl"></i>hello@healtether.com</a>
            </li>
            <li className='py-2 text-lg'>
              <a href="#" className="hover:underline"><i className="fa-solid fa-phone me-2 text-xl"></i>+91-7853040929</a>
            </li>
            <li className='py-2 text-lg'>
              <a href="#" className="hover:underline"><i className="fa-solid fa-location-pin me-2 text-xl"></i>No.12(2) Veerazhagamman Street
                Bodinayakanur, Theni, Tamil Nadu
              </a>
            </li>
            <li className='py-2 text-lg'>
              <a href="#" className="hover:underline"><i className="fa-regular fa-clock me-2 text-xl"></i>Open Hrs:
                Mon-Sat: 10AM - 10 PM
              </a>
            </li>
          </ul>
        </div>
        <div className='block md:hidden col-span-4 md:col-span-1 lg:col-span-1 p-5 '>
          <div className="flex items-center flex-wrap gap-3 md:gap-5 flex-row">
            <a href="#" className="w-full sm:w-auto bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-3 md:px-6 py-2.5  ">
              <i className="fa-brands fa-google-play text-xl md:text-2xl px-1"></i>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs uppercase">Go it on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Googel Play</div>
              </div>
            </a>
            <a href="#" className="w-full sm:w-auto bg-[#11111E]  text-white rounded-lg inline-flex items-center justify-center px-3 md:px-6 py-2.5  ">
              <i className="fa-brands fa-apple  text-xl md:text-2xl px-1"></i>
              <div className="text-left rtl:text-right ">
                <div className="mb-1 text-[10px]">Download on the</div>
                <div className="-mt-1 font-sans text-sm md:text font-semibold">App Store</div>
              </div>
            </a>
          </div>
          <div className='flex lg:justify-start gap-3 p-3'>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-facebook-f"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-twitter"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-instagram"></i>
              </button>
            </div>
            <div className='bg-[#4BBE9E] py-[6px] px-3 rounded-lg'>
              <button>
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
          <div className="">
            <p className="text-base text-[#000000] ">© Copyright 2024 HealTether. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
