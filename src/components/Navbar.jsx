import React from 'react'
import logo from '../assets/react.svg'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 py-10 text-theme2'>
            <div>
                <img src={logo} alt="htpsystem-logo" />
            </div>
            <div>
                <a className='bg-btn px-8 py-2 shadow-md shadow-[#273c57] transition-all duration-500 hover:bg-right-center cursor-pointer rounded-full'>Contact</a>
            </div>
        </div>
    )
}
