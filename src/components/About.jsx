import React, { useEffect, useRef } from 'react';
import AutoplaySlider from './AutoplaySlider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registering the ScrollTrigger plugin

export const About = () => {


    return (
        <div className='px-28 py-10 w-full h-auto bg-top bg-cover bg-no-repeat bg-wallpaper1'>
            <div className='py-5 flex justify-between items-center'>
                <div className='w-[40%] opacity-1'>
                    <AutoplaySlider />
                </div>
                <div
                    className='text-white text-lg leading-7 text-justify w-1/2 opacity-1'

                >
                    <h2 className='text-4xl text-justify text-htpSystem font-medium'>
                        About Us
                    </h2>
                    <p className='pt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        distinctio consectetur architecto rerum, qui voluptates quam quod
                        perferendis esse nobis, laudantium saepe quasi provident, quidem
                        voluptatem eveniet odit nesciunt repellendus.
                    </p>
                    <div className='flex justify-start items-center gap-7 mt-7'>
                        <div className='flex flex-col text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-4xl'>180+</h2>
                            <p className='text-sm'>Total No. of Orders</p>
                        </div>
                        <div className='flex flex-col text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-4xl'>150+</h2>
                            <p className='text-sm'>Above 5+ ratings</p>
                        </div>
                        <div className='flex flex-col text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-4xl'>10+</h2>
                            <p className='text-sm'>Available in Areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
