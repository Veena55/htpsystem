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
        <div className='p-10 lg:px-28 lg:pb-32 lg:pt-20 w-full min-h-screen bg-cover bg-no-repeat bg-wallpaper3 mt-2' ref={about_container}>
            <div className='py-5 flex justify-between items-center flex-col lg:flex-row'>
                <div className='w-full lg:w-[40%] opacity-1'>
                    <AutoplaySlider />
                </div>
                <div
                    className='text-white text-sm md:text-md lg:text-lg leading-7 text-justify md:w-3/4 lg:w-1/2 opacity-0' ref={about}
                >
                    <h2 className='text-2xl md:text-3xl lg:text-4xl text-justify text-htpSystem font-medium'>
                        About Us
                    </h2>
                    <p className='lg:pt-5 text-slate-400 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        distinctio consectetur architecto rerum, qui voluptates quam quod
                        perferendis esse nobis, laudantium saepe quasi provident, quidem
                        voluptatem eveniet odit nesciunt repellendus.
                    </p>
                    <p className='pt-5 text-slate-400 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        distinctio consectetur architecto rerum, qui voluptates quam quod
                        perferendis esse nobis, laudantium saepe quasi provident, quidem
                        voluptatem eveniet odit nesciunt repellendus.
                    </p>
                    <div className='flex justify-start items-center gap-7 mt-10'>
                        <div className='flex flex-col text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-4xl' ref={counter[0]}>{counters[0]}+</h2>
                            <p className='text-sm'>Total No. of Orders</p>
                        </div>
                        <div className='flex flex-col text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-4xl' ref={counter[1]}>{counters[1]}+</h2>
                            <p className='text-sm'>Above 5+ ratings</p>
                        </div>
                        <div className='flex flex-col text-theme2 gap-2 bg-themeLight text-center px-5 py-3 rounded-lg shadow-lg shadow-theme1'>
                            <h2 className='font-bold text-4xl' ref={counter[2]}>{counters[2]}+</h2>
                            <p className='text-sm'>Available in Areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
