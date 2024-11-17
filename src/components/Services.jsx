import React, { useEffect, useRef } from 'react'
import { ServiceCard } from './ServiceCard'
import { MdOutlineHealthAndSafety, MdOutlineHearing, MdOutlineLocalLaundryService } from 'react-icons/md'
import { FaHandHoldingMedical, FaPlugCircleCheck } from 'react-icons/fa6'
import { TbAirConditioning, TbFreezeRow } from 'react-icons/tb'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { CgSmartHomeBoiler } from 'react-icons/cg'
import { GrResources, GrVmMaintenance } from 'react-icons/gr'
import { GiCctvCamera, GiTeacher } from 'react-icons/gi'

const serviceList = [{
    "logo": <MdOutlineHearing className="text-3xl lg:text-4xl" />,
    "title": "All Brand Hearing Aids - Siemens, ALPS, Etc.",
    "content": "Find the perfect hearing aid from leading brands such as Siemens, ALPS, and others, designed to meet diverse hearing needs with advanced technology.",
    "gap": "mt-0"
},
{
    "logo": <FaHandHoldingMedical className="text-3xl lg:text-4xl" />,
    "title": "Medical & Surgical & OT Equipments",
    "content": "Specialized in repairing and maintaining medical and surgical equipment to keep your healthcare operations running smoothly and safely.",
    "gap": "lg:mt-24"
},
{
    "logo": <GiCctvCamera className="text-3xl lg:text-4xl" />,
    "title": "Computer Peripheral & CCTV Security Camera",
    "content": "Your trusted source for high-quality computer peripherals and CCTV cameras, ensuring seamless connectivity and enhanced security for home and business.",
    "gap": "mt-0"
},
{
    "logo": <MdOutlineHealthAndSafety className="text-3xl lg:text-4xl" />,
    "title": "RO Plant & Health Products, Water Treatment Plant",
    "content": "Offering high-quality RO plants and health products designed to provide safe, purified water and ensure effective water treatment solutions for residential and commercial needs.",
    "gap": "lg:mt-24"
}, {
    "logo": <MdOutlineLocalLaundryService className="text-3xl lg:text-4xl" />,
    "title": "Industrial Laundry Machine & Power Products",
    "content": "We provide expert repair and maintenance solutions for industrial laundry equipment and power products, ensuring maximum efficiency and minimal downtime for your business. ",
    "gap": "mt-0"
},
{
    "logo": <TbAirConditioning className="text-3xl lg:text-4xl" />,
    "title": "Medical Gas & Central Oxygen and Suction Pipeline System",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laboriosam rerum temporibus ea facilis, provident sapiente itaque error odio expedita autem, quos voluptates, est quia earum ipsam et dicta necessitatibus",
    "gap": "lg:mt-24"
}, {
    "logo": <GrVmMaintenance className="text-3xl lg:text-4xl" />,
    "title": "Sales & Services & Maintanance, AMC",
    "content": "We offer comprehensive sales, service, and maintenance solutions for industrial laundry machines and power products. Our Annual Maintenance Contracts (AMC) ensure your equipment runs efficiently year-round, with expert repairs and timely servicing tailored to your needs.",
    "gap": "mt-0"
},
{
    "logo": <FaPlugCircleCheck className="text-3xl lg:text-4xl" />,
    "title": "All Kinds of Electricals & Electronics & IT- Hardware/Software Services",
    "content": "We provide a full range of electrical, electronics, and IT services, including installation, repair, and maintenance. Our expert team ensures your systems and devices operate at peak performance, delivering reliable solutions tailored to your specific needs.",
    "gap": "lg:mt-24"
},
{
    "logo": <CgSmartHomeBoiler className="text-3xl lg:text-4xl" />,
    "title": "Dental Chair & Sterilizer/Autoclave, Boiler",
    "content": "We specialize in repairing dental chairs, sterilizers/autoclaves, and boilers, ensuring that your equipment remains in top working condition. Our skilled technicians provide reliable, efficient repair and maintenance services to minimize downtime and ensure smooth operations in your dental or healthcare facility.",
    "gap": "mt-0"
},
{
    "logo": <TbFreezeRow className="text-3xl lg:text-4xl" />,
    "title": "D2H & Deep Frizer & A C, Etc.",
    "content": "We offer professional repair services for D2H systems, deep freezers, air conditioners, and more. Our skilled technicians ensure quick and reliable solutions to keep your appliances running efficiently, delivering comfort and convenience for your home or business.",
    "gap": "lg:mt-24"
},
{
    "logo": <GrResources className="text-3xl lg:text-4xl" />,
    "title": "Human Resource and Man Power Services",
    "content": "We offer professional repair services for D2H systems, deep freezers, air conditioners, and more. Our skilled technicians ensure quick and reliable solutions to keep your appliances running efficiently, delivering comfort and convenience for your home or business.",
    "gap": "lg:mt-0"
},
{
    "logo": <GiTeacher className="text-3xl lg:text-4xl" />,
    "title": "Teacher Services & Technical Support Services ",
    "content": "We offer comprehensive Teacher Services to empower educators with modern tools and training, alongside reliable Technical Support Services for seamless installation, maintenance, and troubleshooting of technology systems.",
    "gap": "lg:mt-24"
}
]

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
            { top: "0%" },
            {
                top: "100%",
                scrollTrigger: {
                    trigger: service.current,
                    start: "top 0%",
                    end: "bottom 100%",
                    scrub: 1, // Increased scrub for smoother and slower animation
                    ease: "power2.out", // Ease for smoother movement
                },
            }
        );

        // Slow down activeBar animation
        gsap.fromTo(
            activeBar.current,
            { top: "0%" },
            {
                height: "100%",
                scrollTrigger: {
                    trigger: service.current,
                    start: "top 0%",
                    end: "bottom 100%",
                    scrub: 1, // Increased scrub for smoother and slower animation
                    ease: "power2.out", // Ease for smoother movement
                },
            }
        );

    }, []);

    return (
        <div className='bg-theme1 text-center p-5 lg:pt-10 lg:pb-32 lg:px-32 overflow-y-hidden' id='services'>
            <h2 className='text-4xl text-htpSystem font-medium'>Services</h2>
            {/* <div className="relative min-h-screen my-5" ref={service}>
                <div className='w-1 min-h-screen bg-white absolute left-0 lg:left-1/2 lg:right-1/2 bottom-0 top-10'></div>
                <div className='w-1 bg-htpSystem absolute left-0 lg:left-1/2 lg:right-1/2 top-10 h-0' ref={activeBar}></div>
                <div className='w-7 h-7 z-20 bg-white rounded-full absolute left-0 lg:left-1/2 -translate-x-3 lg:right-1/2 bottom-0 top-10 border-theme2 border-[5px]'
                    ref={pointer}></div>
                <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-32 px-12 pt-12 lg:pt-20">
                    {serviceList.map((item, index) => {
                        return (
                            <ServiceCard key={index} logo={item.logo} title={item.title} gap={item.gap} content={item.content} />
                        )
                    })}
                </div>
            </div> */}
            <div className="relative min-h-screen my-5 flex justify-center items-start" ref={service}>
                <div className='w-1 min-h-screen bg-white absolute left-0 lg:left-1/2 lg:right-1/2 bottom-0 top-0'></div>
                <div className='w-1 bg-htpSystem absolute left-0 lg:left-1/2 lg:right-1/2 top-0 h-0' ref={activeBar}></div>
                <div className='w-7 h-7 z-20 bg-white rounded-full absolute left-0 lg:left-1/2 -translate-x-3 lg:right-1/2 bottom-0 top-0 border-theme2 border-[5px]'
                    ref={pointer}></div>

                {/* Service Cards */}
                <div className="grid lg:grid-cols-2 gap-y-20 lg:gap-x-32 px-8 py-16 w-full">
                    {serviceList.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-start space-x-4 text-left ${item.gap} ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                                }`}
                        >
                            <div className="text-htpSystem bg-white p-2 rounded-md">{item.logo}</div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-htpSystem">
                                    {item.title}
                                </h3>
                                <p className="text-sm lg:text-base text-gray-400">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
