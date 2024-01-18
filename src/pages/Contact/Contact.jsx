import React from 'react'
import img from '../../Assets/contact/contact.svg'
const Contact = () => {
    return (
        <div className='p-5 md:p-0'>
            <h1 className='text-2xl px-5  md:text-pretty md:px-20 py-10 font-semibold'>Connect with us</h1>
            <div className='md:container md:mx-auto md:px-20 md:p-10 w-full lg:max-w-7xl flex items-center justify-center  flex-col'>
                {/* form box design */}
                <div className='flex items-center justify-center w-full shadow-2xl '>
                    <div className='w-full lg:w-1/2 '>
                        {/* form */}
                        <form className=" bg-[#FDFCFD]  rounded-lg">
                            <div className="flex flex-wrap p-1 ">
                                <div className="w-full md:w-1/2 lg:w-full px-3  ">
                                    <label className="block tracking-wide   text-[18px] font-medium mb-2" htmlFor="grid-first-name">
                                        Your name
                                    </label>
                                    <input className="appearance-none block w-full bg-[#F8F7FC] text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your name here" />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>

                                <div className="w-full md:w-1/2 lg:w-full px-3 ">
                                    <label className="block md:tracking-wide text-[18px] font-medium md:mb-2" htmlFor="grid-first-name">
                                        Enter your phone number
                                    </label>
                                    <input className="w-full bg-[#F8F7FC] text-gray-700 border rounded py-3 px-4 mb-3   focus:outline-none focus:bg-white" id="grid-first-name" type="tel" placeholder="Enter your phone number" />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="w-full md:w-1/2 lg:w-full px-3 mb-6 md:mb-0">
                                    <label className="block tracking-wide text-[18px] font-medium mb-2" htmlFor="grid-first-name">
                                        Clinic/Hospital speciality
                                    </label>
                                    <input className="appearance-none block w-full bg-[#F8F7FC] text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your Speciality" />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className="w-full md:w-1/2 lg:w-full px-3 mb-6 md:mb-0">
                                    <label className="block tracking-wide text-[18px] font-medium mb-2" htmlFor="grid-first-name">
                                        Enter your speciality
                                    </label>
                                    <input className="appearance-none block w-full bg-[#F8F7FC] text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your location" />
                                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div className='flex items-center w-full justify-center py-8 px-5'>
                                    <button className='bg-[#6CEBC6]  lg:w-full  p-2 rounded-md tracking-widest  px-7 text-black font-semibold'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='hidden lg:block lg:w-1/2 h-[500px]'>
                        {/* img */}
                        <img className='w-full object-cover h-full' src={img} alt="" />
                    </div>

                </div>
                {/* footer */}
                <div className='bg-[#164336] hidden md::block lg:flex items-center flex-wrap md:flex-nowrap text-white gap-10 md:gap-10 py-5 px-2 rounded-bl-2xl rounded-br-2xl '>
                    <div className='w-1/4  px-2'>
                        <a href="#" className="hover:underline flex gap-1 ">
                            <i className="fa-regular fa-envelope-open text-lg"></i>
                            <div className='flex flex-col'>
                                <p>Email:</p>
                                <p> hello@healtether.comp</p>
                            </div>
                        </a>
                    </div>
                    <div className='w-1/4 m-1 px-2'>
                        <a href="#" className="hover:underline flex justify-center items-center gap-2 ">
                            <i className="fa-solid fa-phone text-lg"></i>
                            <div className='flex flex-col'>
                                <p>Call:</p>
                                <p className='text-nowrap'>+91-7853040929 </p>
                            </div>
                        </a>
                    </div>
                    <div className='w-1/4 m-1 px-2'>
                        <a href="#" className="hover:underline flex justify-center items-center gap-2 ">
                            <i className="fa-regular fa-clock text-lg"></i>
                            <div className='flex flex-col'>
                                <p>Open Hrs:</p>
                                <p className='text-nowrap'>Mon-Sat:10AM -10 PM</p>
                            </div>
                        </a>
                    </div>
                    <div className='w-1/4 m-1 px-2'>
                        <a href="#" className="hover:underline flex justify-center items-center gap-2">
                            <i className="fa-solid fa-location-pin text-lg"></i>
                            <div className='flex flex-col'>
                                <p>Location:</p>
                                <p>
                                    No.12(2) Veerazhagamman Street
                                    Bodinayakanur, Theni, Tamil Nadu
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
