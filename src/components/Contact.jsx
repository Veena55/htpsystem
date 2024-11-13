import React from 'react'
import { MdCall } from 'react-icons/md'

export const Contact = () => {
    return (
        <div className='fixed -right-36 hover:right-0 transition-all cursor-pointer duration-500 bottom-24 z-50 bg-transparent hover:bg-htpSystem rounded-l-full'>
            <div className='rounded-l-full text-themeLight p-2 flex justify-center items-center'>
                <div className='w-14 h-14 bg-htpSystem rounded-full border-[3px] shadow-md flex justify-center items-center'>
                    <MdCall className='text-white cursor-pointer' size={30} />
                </div>
                <div className='text-lg font-bold pl-2 '>
                    +91-9876144567
                </div>
            </div>
        </div>
    )
}
