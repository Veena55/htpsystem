import React, { useEffect, useRef } from 'react'
import { ServiceCard } from './ServiceCard'
import { MdDeveloperMode, MdHomeRepairService } from 'react-icons/md'
import { IoHardwareChipSharp } from 'react-icons/io5'
import { FaGlassWaterDroplet, FaPlugCircleCheck } from 'react-icons/fa6'
import { TbAirConditioning } from 'react-icons/tb'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const serviceList = [{
    "logo": <MdDeveloperMode size={60} />,
    "title": "Web Development",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-0"
},
{
    "logo": <IoHardwareChipSharp size={60} />,
    "title": "Computer Hardwaring",
    "content": "CoLorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-24"
}, {
    "logo": <FaGlassWaterDroplet size={60} />,
    "title": "Water Purifier Services",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-0"
},
{
    "logo": <TbAirConditioning size={60} />,
    "title": "AC Installation/Unsitallation",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-24"
}, {
    "logo": <MdHomeRepairService size={60} />,
    "title": "Home Applicances Repairing",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-0"
},
{
    "logo": <FaPlugCircleCheck size={60} />,
    "title": "All Electronics Work",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "mt-24"
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
            <h2 className='text-5xl text-htpSystem font-medium'>Services</h2>
            <div className="relative min-h-screen my-5" ref={service}>
                <div className='w-1 min-h-screen bg-white absolute left-1/2 right-1/2 bottom-0 top-10'></div>
                <div className='w-1 bg-htpSystem absolute left-1/2 right-1/2 top-10 h-0' ref={activeBar}></div>
                <div className='w-7 h-7 z-20 bg-white rounded-full absolute left-1/2 -translate-x-3 right-1/2 bottom-0 top-10 border-htpSystem border-[5px]'
                    ref={pointer}></div>
                <div className="grid grid-cols-2 gap-32 pt-20">
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
