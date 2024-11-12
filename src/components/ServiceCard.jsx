import React from 'react'

export const ServiceCard = ({ logo, title, gap, content }) => {
    return (
        <div className={`flex items-start justify-center gap-5 ${gap}`}>
            <div className='text-white border p-2 bg-htpSystem rounded-lg'>
                {logo}
            </div>
            <div>
                <h1 className='text-htpSystem text-left text-2xl font-semibold'>{title}</h1>
                <p className='text-white text-justify pt-2 text-lg leading-7'>{content}</p>
            </div>
        </div>
    )
}
