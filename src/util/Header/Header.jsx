import React, { useState } from 'react'
import logo from '../../Assets/Svg/logo.svg'
import menu from '../../Assets/icon/menu.svg'
import close from '../../Assets/icon/close.svg'
import Navitem from '../../data/Navitem.js'
import {Link ,useLocation} from 'react-router-dom';
const Header = () => {
    let location = useLocation();
   

    const [Open, setOpen] = useState(false)
    const showhandel = () => {
        setOpen(true)
    }
    const removehandel = () => {
        setOpen(false)

    }
    // const handleNavitem = (path) => {
    //     navigate.push(path)
    // }

    return (
        <nav className="fixed top-0 w-full z-10  lg:shadow-2xl">
            <div className="w-full bg-white mx-auto px-2 py-2 md:px-16 flex lg:flex-row flex-wrap items-center justify-between ">
                <a href="#" className="flex items-center px-2 md:px-0">
                    <img src={logo} className="w-36 md:w-52 object-cover" alt="Flowbite Logo" />
                </a>
                <div className="lg:hidden flex gap-5 ">
                    <button type="button" className="text-black kw:hidden bg-[#6CEBC6] font-medium rounded shadow-2xl text-[16px] px-[24px] py-[9px] text-center">
                        Log in
                    </button>
                    <button className='w-8'>
                        <img onClick={showhandel} className={`w-full ${Open ? "hidden" : "block"}  p-1 lg:hidden`} src={menu} alt="" />
                        <img onClick={removehandel} className={`w-full ${Open ? "block" : "hidden"} p-1 lg:hidden `} src={close} alt="" />
                    </button>
                </div>
                <div className={`w-full md:absolute z-10 md:top-[6.5%] lg:m-0 md:right-0 md:w-72 text-center ${Open ? "block" : "hidden"} lg:static lg:flex lg:w-auto`}>
                    <ul className="flex flex-col items-center justify-center transition-all duration-300 font-normal mx-3 lg:p-0 md:px-5 lg:flex-row lg:mt-0 lg:border-0 text-[17px] ">
                        {
                            Navitem.map((item) => (
                                <li className='m-[1px] w-full lg:w-auto bg-[#F8F7FC] lg:bg-[#FDFCFD] shadow-xl lg:shadow-none' key={item.id}>
                                    <Link to={item.url} className={` ${location.pathname === item.url ? "text-[#6CEBC6]" :"text-black"} block py-2 px-3 m-1 `}  >{item.name}</Link>
                                </li>
                            ))}
                        <li className='m-[1px] w-full lg:w-auto bg-[#F8F7FC] lg:bg-[#FDFCFD] shadow-xl lg:shadow-none' >
                            <Link to={'/login'} className="block py-1 px-1 m-1 ">
                                <button type="button" className="text-black lg:bg-[#6CEBC6] font-bold lg:rounded lg:shadow-2xl text-[16px] px-[26px] py-[9px] text-center  ">
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
