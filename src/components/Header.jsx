import React, { useEffect, useRef } from 'react'
import { FaTools } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { FeatureCards } from './FeatureCards'
import { RiHandCoinLine } from 'react-icons/ri'
import { BsTools } from 'react-icons/bs'
import { PiToolbox } from 'react-icons/pi'
import { BiPlug } from 'react-icons/bi'
import { CgCodeSlash } from 'react-icons/cg'
import { FaComputer } from 'react-icons/fa6'
import gsap from 'gsap'

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
}];

export const Header = () => {
    const pointer = useRef();
    const title = useRef();
    const content = useRef();
    const header = useRef();
    const featuresIcons = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1, // Repeat infinitely
            repeatDelay: 1,
        });
        const tlo = gsap.timeline({
            repeat: 0, // Repeat infinitely
        });
        tlo.to(title.current, {
            opacity: 1,
            duration: 1
        }).to(content.current, {
            opacity: 1,
            duration: 2,
            delay: .5
        })
        tl.to(pointer.current, {
            opacity: 0,
        })
        tl.to(featuresIcons[0].current, {
            opacity: 1,
            delay: .5
        })
            .to(pointer.current, {
                left: 0,
                opacity: 1,
                delay: .5
            })
            .to(pointer.current, {
                top: "35%",
            }).to(pointer.current, {
                opacity: 0
            })
            .to(featuresIcons[1].current, {
                opacity: 1,
            })
            .to(pointer.current, {
                opacity: 0
            })
            .to(pointer.current, {
                top: "98%",
                opacity: 1
            })
            .to(pointer.current, {
                left: "48%",
            })
            .to(pointer.current, {
                opacity: 0
            })
            .to(featuresIcons[2].current, {
                opacity: 1,
            })
            .to(pointer.current, {
                left: "100%",
                opacity: 1
            })
            .to(pointer.current, {
                top: "45%",
                left: "100%",
            }).to(pointer.current, {
                opacity: 0
            })
            .to(featuresIcons[3].current, {
                opacity: 1,
            }).to(pointer.current, {
                top: "0",
                left: "100%",
                opacity: 1
            }).to(pointer.current, {
                top: "-20px",
            }).to(pointer.current, {
                left: "55%",
                duration: 1
            }).to(pointer.current, {
                opacity: 0
            });

    }, []);

    return (
        <div className='pt-5 pb-20 relative bg-theme1'>
            <div className="relative flex justify-center border-[3px] border-dashed border-indigo-400 p-10 rounded-xl mx-auto w-[50%]"
                ref={header}>
                <div className="mt-10 5 mx-auto">
                    {/* <h1 className=" text-center text-8xl font-extrabold bg-clip-text text-transparent hover:bg-gradient-to-tr transition-all duration-1000 bg-gradient-to-l from-indigo-400 via-htpSystem to-white">HTPSYSTEM</h1> */}
                    <h1 className="text-center opacity-0 text-8xl font-bold bg-clip-text text-transparent pb-6 bg-grad hover:bg-gradient-to-l hover:from-[#d2d2d2] hover:to-[#605af9] transition-all duration-1000"
                        ref={title}>
                        HtpSystem
                    </h1>
                    <p className='w-2/3 mx-auto text-slate-400 pb-10 text-lg leading-6 text-center pt-2 opacity-0'
                        ref={content}
                    >All in one solution in one platform. Everything you need, all in one place. Simplify, streamline, and succeed on a single platform</p>
                </div>
                <div className="absolute rounded-full left-1/2 -translate-x-2 -top-5 z-50 bg-white opacity-0"
                    ref={pointer}>
                    <GoDotFill className='text-htpSystem rounded-full' size={25} />
                </div>
                <div className="absolute rounded-full border p-1 -top-8 opacity-0"
                    ref={featuresIcons[0]}>
                    <FaTools className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -left-8 top-1/2 -translate-y-8 opacity-0"
                    ref={featuresIcons[1]}>
                    <CgCodeSlash className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -right-8 top-1/2  -translate-y-8 opacity-0"
                    ref={featuresIcons[3]}>
                    <BiPlug className='text-white bg-htpSystem rounded-full p-3' size={50} />
                </div>
                <div className="absolute rounded-full border p-1 -bottom-8 opacity-0"
                    ref={featuresIcons[2]}>
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
