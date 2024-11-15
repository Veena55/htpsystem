import React from 'react'
import { BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import logo from '../assets/htps.png'

const Footer = () => {
    return (
        <>
            <div className='bg-themeLight text-white p-10 lg:py-20 lg:px-32'>
                <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-5 justify-start lg:justify-between lg:gap-10">
                    <div>
                        <img src={logo} alt="htpsystem-logo" className='scale-105' width={150} height={80} />

                        {/* <div className="mt-5 text-white">
                            <h5 className='text-2xl font-semibold'>Follow Us On</h5>
                            <div className="flex gap-3 items-center py-2">
                                <a href="#">
                                    <BsWhatsapp className='text-3xl text-htpSystem' />
                                </a>

                                <a href="#">
                                    <BsInstagram className='text-3xl text-htpSystem' />
                                </a>
                                <a href="#">
                                    <BsLinkedin className='text-3xl text-htpSystem' />
                                </a>
                                <a href="#">
                                    <BsFacebook className='text-3xl text-htpSystem' />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Cities</h2>
                        <div className="lg:pt-1 text-slate-300">
                            <p className='text-md text-justify lg:pt-4'>Varanasi</p>
                            <p className='text-md text-justify lg:pt-4'>Gorakhpur</p>
                            {/* <p className='text-md text-justify lg:pt-4'>Kashi</p> */}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Our Services</h2>
                        <div className="lg:pt-1 text-slate-300">
                            <p className='text-md text-justify lg:pt-4'>Hardware & Sofware</p>
                            <p className='text-md text-justify lg:pt-4'>Electronics Repair</p>
                            <p className='text-md text-justify lg:pt-4'>Water Purifiring</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Company</h2>
                        <div className="lg:pt-1 text-slate-300">
                            <p className='text-md text-justify lg:pt-4'>About Us</p>
                            {/* <p className='text-md text-justify lg:pt-4'>Careers</p> */}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Contact Us</h2>
                        <div className="lg:pt-1 text-slate-300">
                            <div className='text-md text-justify flex items-center gap-2 lg:pt-4'>
                                <BiPhoneCall className='text-htpSystem text-2xl' />
                                <p>+91- 9307661175</p>
                            </div>
                            <a href="mailto:htpsytem@gmail.com" className='text-md text-justify flex items-center gap-2 lg:pt-4'>
                                <BiMailSend className='text-htpSystem text-2xl' />
                                <span>htpsytem@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-theme1 text-center py-2">
                <small className='text-slate-400'>Copyright Reserved to HTPS - 2024</small>
            </div>
        </>
    )
}

export default Footer