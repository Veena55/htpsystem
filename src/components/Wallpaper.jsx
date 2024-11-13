import React from 'react';
import { FaCode, FaDesktop, FaLaptopCode, FaTools, FaTint, FaMicrochip, FaFaucet } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { GiWaterDrop, GiWaterRecycling } from 'react-icons/gi';
import { MdBatteryChargingFull } from 'react-icons/md';
import { BiNetworkChart } from 'react-icons/bi';

const Wallpaper = () => {
    const iconsArray = [
        <FaCode />, <FaDesktop />, <FaLaptopCode />, <BiNetworkChart />, // Web Dev
        <BsTools />, <FaTools />, <FaMicrochip />, <MdBatteryChargingFull />, // Electronics Repair
        <GiWaterDrop />, <FaTint />, <GiWaterRecycling />, <FaFaucet /> // Water Purification
    ];

    // Generate icons with random positions and sizes
    const icons = Array.from({ length: 50 }).map(() => iconsArray[Math.floor(Math.random() * iconsArray.length)]);

    return (
        <div className='absolute inset-0 w-full h-screen overflow-hidden bg-theme1'>
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className='text-slate-600 opacity-25 animate-pulse duration-75'
                    style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        fontSize: `${Math.random() * 10 + 15}px`, // Random sizes for icons
                    }}
                >
                    {icon}
                </div>
            ))}
        </div>
    );
}

export default Wallpaper;
