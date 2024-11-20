import React, { useEffect, useRef, useState } from 'react';
import AutoplaySlider from './AutoplaySlider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registering the ScrollTrigger plugin

export const About = () => {
    const [counters, setCounters] = useState([0, 0, 0]);
    const counter = useRef([]);
    const about = useRef();
    const about_container = useRef();

    useEffect(() => {
        // Function to update the counters
        const displayCounters = () => {
            let timer;
            timer = setInterval(() => {
                setCounters(prevCounters => {
                    const newCounters = [...prevCounters];
                    newCounters[0] < 180 && (newCounters[0] += 1); // Counter 1: Stops at 180
                    newCounters[1] < 100 && (newCounters[1] += 1); // Counter 2: Stops at 100
                    newCounters[2] < 80 && (newCounters[2] += 1); // Counter 3: Stops at 80

                    // If all counters have reached their respective limits, stop the interval
                    if (newCounters[0] >= 180 && newCounters[1] >= 100 && newCounters[2] >= 80) {
                        clearInterval(timer);
                    }

                    return newCounters;
                })
            }, 20);
        };

        // GSAP fade-in animation with ScrollTrigger
        gsap.to(about.current, {
            opacity: 1,
            duration: 3, // Making fade-in smoother with a longer duration
            ease: "power3.out", // Smooth easing for a soft fade
            scrollTrigger: {
                trigger: about_container.current,
                start: "top top",
                end: "bottom bottom",
                once: true,
                scrub: true,
            },
            onComplete: () => {
                // Call displayCounters after GSAP animation completes
                displayCounters();
            }
        });

    }, []);
    return (
        // <div className='p-10 lg:px-28 lg:pb-32 lg:pt-20 w-full bg-cover bg-no-repeat lg:bg-[url("/src/assets/wallpaper3.png")] mt-2' ref={about_container} id='about'>
        <div className='p-10 lg:px-16 lg:pb-32 lg:pt-20 w-full bg-cover bg-no-repeat lg:bg-[url("/src/assets/wallpaper3.png")] mt-2' ref={about_container} id='about'>
            <div className='py-5 flex justify-between items-center flex-col lg:flex-row'>
                <div className='w-full lg:w-[45%] opacity-1'>
                    <AutoplaySlider />
                </div>
                <div
                    className='text-white text-sm md:text-md lg:text-[17px] leading-7 text-justify md:w-3/4 lg:w-[52%] lg:opacity-0' ref={about}
                >
                    <div className='text-2xl lg:text-4xl font-medium inline-block'><span className='text-white pr-2 border-b-4 border-b-red-500'>About</span><span className='border-b-4 border-b-white text-htpSystem'>Us</span></div>

                    <p className='pt-7 lg:pt-10 text-slate-400 leading-7'>
                        Welcome to HINDUSTAN TECHNO AND POWER SYSTEM (HTP System), a trusted leader in the tech and power industry since 19.. For over .. years, we have been dedicated to delivering innovative and sustainable solutions that empower businesses and transform industries
                    </p>
                    <p className='pt-5 text-slate-400 leading-7'>
                        At HTP System, our customers are at the heart of everything we do. We take pride in offering the best and most effective services tailored to meet your unique needs—all at highly cost-efficient rates. Our commitment to quality, reliability, and affordability has earned us the trust and loyalty of countless clients across diverse sectors.
                    </p>
                    <div className='flex justify-start items-center flex-wrap gap-5 lg:gap-7 mt-5 lg:mt-10'>
                        <div className='flex flex-col w-full lg:w-auto text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-2xl lg:text-3xl' ref={counter[0]}>{counters[0]}+</h2>
                            <p className='text-sm'>Total No. of Orders</p>
                        </div>
                        <div className='flex flex-col w-full lg:w-auto text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-2xl lg:text-3xl' ref={counter[1]}>{counters[1]}+</h2>
                            <p className='text-sm'>Above 5+ ratings</p>
                        </div>
                        <div className='flex flex-col w-full lg:w-auto text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-2xl lg:text-3xl' ref={counter[2]}>{counters[2]}+</h2>
                            <p className='text-sm'>Available in Areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
