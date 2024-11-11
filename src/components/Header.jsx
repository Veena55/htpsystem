import React from 'react'
import { Navbar } from './Navbar'
import { FaTools } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

export const Header = () => {
    return (
        <div className='pt-10 pb-20'>
            <div className="relative flex justify-center border-[3px] border-indigo-400 p-10 rounded-xl mx-auto w-[50%]">
                <div className="mt-10 5 mx-auto">
                    {/* <h1 className=" text-center text-8xl font-extrabold bg-clip-text text-transparent hover:bg-gradient-to-tr transition-all duration-1000 bg-gradient-to-l from-indigo-400 via-btn to-white">HTPSYSTEM</h1> */}
                    <h1 className="text-center text-8xl font-bold bg-clip-text text-transparent pb-6 bg-grad hover:bg-gradient-to-l hover:from-[#d2d2d2] hover:to-[#605af9] transition-all duration-1000">
                        HtpSystem
                    </h1>
                    <p className='w-2/3 mx-auto text-slate-400 pb-10 text-lg leading-6 text-center pt-2'>All in one solution in one platform. Everything you need, all in one place. Simplify, streamline, and succeed on a single platform</p>
                </div>
                <div className="absolute rounded-full left-1/3 -top-2">
                    <GoDotFill className=' text-white rounded-full border' size={20} />
                </div>
                <div className="absolute rounded-full border p-1 -top-8">
                    <FaTools className='text-white bg-btn rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -left-8 top-1/2 -translate-y-8">
                    <FaTools className='text-white bg-btn rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -right-8 top-1/2  -translate-y-8">
                    <FaTools className='text-white bg-btn rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -bottom-8 ">
                    <FaTools className='text-white bg-btn rounded-full p-3' size={50} />
                </div>
            </div>
        </div>
    )
}
