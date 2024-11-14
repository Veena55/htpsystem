import React, { useEffect, useRef } from 'react'
import { ServiceCard } from './ServiceCard'
import { MdDeveloperMode, MdHomeRepairService } from 'react-icons/md'
import { IoHardwareChipSharp } from 'react-icons/io5'
import { FaGlassWaterDroplet, FaPlugCircleCheck } from 'react-icons/fa6'
import { TbAirConditioning } from 'react-icons/tb'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const serviceList = [{
    "logo": <MdDeveloperMode className="text-3xl lg:text-6xl" />,
    "title": "Web Development",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-0"
},
{
    "logo": <IoHardwareChipSharp className="text-3xl lg:text-6xl" />,
    "title": "Computer Hardwaring",
    "content": "CoLorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "lg:mt-24"
}, {
    "logo": <FaGlassWaterDroplet className="text-3xl lg:text-6xl" />,
    "title": "Water Purifier Services",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-0"
},
{
    "logo": <TbAirConditioning className="text-3xl lg:text-6xl" />,
    "title": "AC Installation/Unsitallation",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "lg:mt-24"
}, {
    "logo": <MdHomeRepairService className="text-3xl lg:text-6xl" />,
    "title": "Home Applicances Repairing",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-0"
},
{
    "logo": <FaPlugCircleCheck className="text-3xl lg:text-6xl" />,
    "title": "All Electronics Work",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "lg:mt-24"
}]

export const Services = () => {
    const service = useRef();
    // const bar = useRef();
    const activeBar = useRef();
    const pointer = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // Slow down pointer animation
        gsap.fromTo(
            pointer.current,
            { top: "2%" },
            {
                top: "100%",
                scrollTrigger: {
                    trigger: service.current,
                    start: "top 5%",
                    end: "bottom 80%",
                    scrub: 1, // Increased scrub for smoother and slower animation
                    ease: "power2.out", // Ease for smoother movement
                },
            }
        );

        // Slow down activeBar animation
        gsap.fromTo(
            activeBar.current,
            { top: "2%" },
            {
                height: "100%",
                scrollTrigger: {
                    trigger: service.current,
                    start: "top 5%",
                    end: "bottom 80%",
                    scrub: 1, // Increased scrub for smoother and slower animation
                    ease: "power2.out", // Ease for smoother movement
                },
            }
        );

    }, []);

    return (
        <div className='bg-theme1 text-center pt-10 pb-32 px-32'>
            <h2 className='text-4xl text-htpSystem font-medium'>Services</h2>
            <div className="relative min-h-screen my-5" ref={service}>
                <div className='w-1 min-h-screen bg-white absolute left-0 lg:left-1/2 lg:right-1/2 bottom-0 top-10'></div>
                <div className='w-1 bg-htpSystem absolute left-0 lg:left-1/2 lg:right-1/2 top-10 h-0' ref={activeBar}></div>
                <div className='w-7 h-7 z-20 bg-white rounded-full absolute left-0 lg:left-1/2 -translate-x-3 lg:right-1/2 bottom-0 top-10 border-htpSystem border-[5px]'
                    ref={pointer}></div>
                <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-32 px-12 pt-12 lg:pt-20">
                    {serviceList.map((item, index) => {
                        return (
                            <ServiceCard key={index} logo={item.logo} title={item.title} gap={item.gap} content={item.content} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
