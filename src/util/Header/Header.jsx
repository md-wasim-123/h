import React, { useState } from 'react'
import logo from '../../Assets/Svg/logo.svg'
import Navitem from '../../data/Navitem.js'

import { Link } from 'react-router-dom'
const Header = () => {
    const [Open, setOpen] = useState(false)
    const showhandel = () => {
        setOpen(true)
    }
    const removehandel = () => {
        setOpen(false)

    }

    return (
        <nav className="bg-white border-gray-200  lg:shadow-2xl">
            <div className="w-full max-w-7xl mx-auto px-2 py-2 md:px-20 flex lg:flex-row flex-wrap items-center justify-between ">
                <a href="#" className="flex items-center">
                    <img src={logo} className="w-52" alt="Flowbite Logo" />
                </a>
                <div className="lg:hidden flex gap-5 ">
                    <button type="button" className="text-black kw:hidden bg-[#6CEBC6] font-medium rounded shadow-2xl text-[16px] px-[24px] py-[9px] text-center">
                        Log in
                    </button>
                    <button>
                        <i onClick={showhandel} className={`fa-solid fa-bars ${Open ? "hidden" : "block"}  text-3xl p-1 lg:hidden`}></i>
                        <i onClick={removehandel} className={` fa-solid fa-xmark  ${Open ? "block" : "hidden"}  text-3xl p-1 lg:hidden `}></i>
                    </button>
                </div>
                <div className={`w-full md:absolute md:top-[6.5%] lg:m-0 md:right-0 md:w-72 text-center ${Open ? "block" : "hidden"} lg:static lg:flex lg:w-auto`}>
                    <ul className="flex flex-col items-center justify-center transition-all duration-300 font-normal lg:p-0 md:px-5 lg:flex-row lg:mt-0 lg:border-0 text-[17px] ">
                        {
                            Navitem.map((item) => (
                                <li className='m-[1px] w-full lg:w-auto bg-[#F8F7FC] lg:bg-[#FDFCFD] shadow-xl lg:shadow-none' key={item.id}>
                                    <Link to={item.url} className="block py-2 px-3 m-1 " aria-current="page">{item.name}</Link>
                                </li>
                            ))}
                        <li className='m-[1px] w-full lg:w-auto bg-[#F8F7FC] lg:bg-[#FDFCFD] shadow-xl lg:shadow-none' >
                            <Link to={'/login'} className="block py-1 px-3 m-1 ">
                                <button type="button" className="text-black lg:bg-[#6CEBC6] font-medium lg:rounded lg:shadow-2xl text-[16px] px-[24px] py-[9px] text-center  ">
                                    Log in
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Header
