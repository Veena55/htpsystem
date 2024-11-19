import React, { useEffect, useRef, useState } from 'react'
import { ServiceCard } from './ServiceCard'

import { gsap } from 'gsap';
import { serviceList } from './serviceList';


export const Services = () => {
    const service = useRef();
    const [active, setActive] = useState("Medical");

    return (
        <div className='bg-theme1 text-center p-5 lg:pt-10 lg:pb-32 lg:px-32' id='services'>
            <div className='text-4xl font-medium inline-block'><span className='text-white pr-2 border-b-4 border-b-red-500'>Our</span><span className='border-b-4 border-b-white text-htpSystem'>Services</span></div>
            <div className="relative min-h-screen my-5" ref={service}>
                <div className='flex flex-col lg:flex-row lg:justify-center pt-16'>
                    <div className={`${active == 'Electricity' ? "border-0 border-slate-500 bg-themeLight rounded-tl-md rounded-tr-md shadow-custom" : "border-b-[1px] border-gray-400"}`}>
                        <button className='text-white lg:text-lg px-4 py-2' onClick={() => setActive("Electricity")}>Electricity</button>
                    </div>
                    <div className={`${active == 'Medical' ? "border-0 border-slate-500 bg-themeLight rounded-tl-md rounded-tr-md shadow-custom" : "border-b-[1px] border-gray-400"}`}>
                        <button className='text-white lg:text-lg px-4 py-2' onClick={() => setActive("Medical")}>Medical & Industrial</button>
                    </div>
                    <div className={`${active == 'H_S' ? "border-0 border-slate-500 bg-themeLight rounded-tl-md rounded-tr-md shadow-custom" : "border-b-[1px] border-gray-400"}`}>
                        <button className='text-white lg:text-lg px-4 py-2' onClick={() => setActive("H_S")}>Hardware & Software</button>
                    </div>
                    <div className={`${active == 'HR' ? "border-0 border-slate-500 bg-themeLight rounded-tl-md rounded-tr-md shadow-custom" : "border-b-[1px] border-gray-400"}`}>
                        <button className='text-white lg:text-lg px-4 py-2' onClick={() => setActive("HR")}>Human Resource</button>
                    </div>
                </div>

                <div className="md:px-5 lg:px-0 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {serviceList[active].map((item, index) => (
                        <div
                            key={index}
                        >
                            <ServiceCard logo={item.logo} title={item.title} content={item.content} list={item.list} keyVal={index} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
