import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdCall } from 'react-icons/md'

export const Contact = () => {
    return (
        <>
            <div className='fixed -right-36 hover:right-0 transition-all cursor-pointer duration-500 bottom-24 z-[1500] bg-transparent hover:bg-theme2 shadow-lg rounded-l-full'>
                <a href='tel:+919307661175' className='rounded-l-full text-themeLight p-2 flex justify-center items-center'>
                    <div className='w-12 h-12 bg-theme2 rounded-full border-[3px] shadow-md flex justify-center items-center'>
                        <MdCall className='text-white cursor-pointer' size={30} />
                    </div>
                    <div className='text-lg font-bold pl-2 '>
                        +91-9307661175
                    </div>
                </a>
            </div>
            <div className='fixed -right-36 hover:right-0 transition-all cursor-pointer duration-500 bottom-7 z-[1500] bg-transparent hover:bg-green-500 shadow-lg rounded-l-full'>
                <a href="https://wa.me/+919307661175?text=Hello, I am interested in your services!" target="_blank" className='rounded-l-full text-themeLight p-2 flex justify-center items-center'>
                    <div className='w-12 h-12 bg-green-500 rounded-full border-[3px] shadow-md flex justify-center items-center'>
                        <BsWhatsapp className='text-white cursor-pointer' size={30} />
                    </div>
                    <div className='text-lg font-bold pl-2 '>
                        +91-9307661175
                    </div>
                </a>
            </div>
        </>
    )
}
