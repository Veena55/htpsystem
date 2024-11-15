import React from 'react'

export const ServiceCard = ({ logo, title, gap, content }) => {
    return (
        <div className={`flex items-start justify-center gap-5 ${gap}`}>
            <div className='text-white border p-2 bg-theme2 rounded-lg'>
                {logo}
            </div>
            <div>
                <h1 className='text-theme2 text-left text-xl lg:text-2xl font-medium'>{title}</h1>
                <p className='text-white text-justify pt-2 text-sm md:text-md lg:text-lg leading-7'>{content}</p>
            </div>
        </div>
    )
}
