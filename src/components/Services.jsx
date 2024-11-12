import React from 'react'
import { ServiceCard } from './ServiceCard'
import { MdDeveloperMode, MdHomeRepairService } from 'react-icons/md'
import { IoHardwareChipSharp } from 'react-icons/io5'
import { FaGlassWaterDroplet, FaPlugCircleCheck } from 'react-icons/fa6'
import { TbAirConditioning } from 'react-icons/tb'

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
    "gap": "mt-32"
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
    "gap": "mt-32"
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
    "gap": "mt-32"
}]

export const Services = () => {
    return (
        <div className='bg-theme1 text-center p-32'>
            <h2 className='text-4xl text-htpSystem font-medium'>Services</h2>
            <div className="relative min-h-screen my-5">
                <div className='w-1 min-h-screen bg-white absolute left-1/2 right-1/2 bottom-0 top-10'></div>
                <div className='w-7 h-7 z-20 bg-white rounded-full absolute left-1/2 -translate-x-3 right-1/2 bottom-0 top-10 border-htpSystem border-[5px]'></div>
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
