import React from 'react'
import { FaTools } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { FeatureCards } from './FeatureCards'
import { RiHandCoinLine } from 'react-icons/ri'
import { BsTools } from 'react-icons/bs'
import { PiToolbox } from 'react-icons/pi'
import { BiPlug } from 'react-icons/bi'
import { CgCodeSlash } from 'react-icons/cg'
import { FaComputer, FaWandMagicSparkles } from 'react-icons/fa6'

const features = [{
    "logo": <BsTools />,
    "content": 'High Quality Service'
},
{
    "logo": <PiToolbox />,
    "content": 'One-Stop Solution'
},
{
    "logo": <RiHandCoinLine />,
    "content": 'Budget Friendly'
}]

export const Header = () => {
    return (
        <div className='pt-5 pb-20 relative bg-wallpaper1 bg-bottom bg-cover bg-no-repeat'>

            {/* <div className="absolute top-0 left-5 z-10 text-slate-300">
                <div className=''>
                    <FaWandMagicSparkles className='text-slate-800 text-2xl' />
                </div>
            </div>
            <div className="absolute top-32 left-32 z-10 text-slate-300">
                <div className=''>
                    <FaWandMagicSparkles className='text-slate-800 text-2xl' />
                </div>
            </div>
            <div className="absolute top-0 right-5 z-10 text-slate-300">
                <div className=''>
                    <FaWandMagicSparkles className='text-slate-800 text-2xl' />
                </div>
            </div>
            <div className="absolute top-32 right-32 z-10 text-slate-300">
                <div className=''>
                    <FaWandMagicSparkles className='text-slate-800 text-2xl' />
                </div>
            </div> */}
            <div className="relative flex justify-center border-[3px] border-indigo-400 p-10 rounded-xl mx-auto w-[50%]">
                <div className="mt-10 5 mx-auto">
                    {/* <h1 className=" text-center text-8xl font-extrabold bg-clip-text text-transparent hover:bg-gradient-to-tr transition-all duration-1000 bg-gradient-to-l from-indigo-400 via-htpSystem to-white">HTPSYSTEM</h1> */}
                    <h1 className="text-center text-8xl font-bold bg-clip-text text-transparent pb-6 bg-grad hover:bg-gradient-to-l hover:from-[#d2d2d2] hover:to-[#605af9] transition-all duration-1000">
                        HtpSystem
                    </h1>
                    <p className='w-2/3 mx-auto text-slate-400 pb-10 text-lg leading-6 text-center pt-2'>All in one solution in one platform. Everything you need, all in one place. Simplify, streamline, and succeed on a single platform</p>
                </div>
                <div className="absolute rounded-full left-1/3 -top-2">
                    <GoDotFill className=' text-white rounded-full border' size={20} />
                </div>
                <div className="absolute rounded-full border p-1 -top-8">
                    <FaTools className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -left-8 top-1/2 -translate-y-8">
                    <CgCodeSlash className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -right-8 top-1/2  -translate-y-8">
                    <BiPlug className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -bottom-8 ">
                    <FaComputer className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
            </div>
            {/* Feature Cards */}
            <div className="flex justify-center gap-10 mt-20">
                {features.map((item, index) => <FeatureCards key={index} logo={item.logo} content={item.content} />)}
            </div>
        </div>
    )
}
