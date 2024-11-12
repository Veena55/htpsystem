import React from 'react'
import logo from '../assets/htpsLogo.png'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-start px-10 pt-5 pb-20 text-theme2'>
            <div>
                <img src={logo} alt="htpsystem-logo" width={120} height={50} />
            </div>
            <div className='mt-10'>
                <a className='bg-htpSystem px-8 py-2 shadow-md shadow-[#273c57] transition-all duration-500 hover:bg-right-center cursor-pointer rounded-full'>Contact</a>
            </div>
        </div>
    )
}
