import React, { useState } from 'react';
// import logo from '../assets/htpsLogo.png';
import logo from '../assets/htps.png';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import SideBar from './SideBar';

export const Navbar = () => {
    const [showBars, setShowBars] = useState(true);

    return (
        <>
            <div className="flex justify-between items-start pb-7 px-5 lg:px-10 lg:pt-2 lg:py-5 text-theme2 relative z-50">
                <div>
                    <img src={logo} alt="htpsystem-logo" width={180} />
                </div>
                <div className="mt-5">
                    {showBars && (
                        <HiMiniBars3BottomRight
                            className="cursor-pointer"
                            size={30}
                            onClick={() => setShowBars(false)}
                        />
                    )}
                </div>
            </div>
            {/* Sidebar */}
            {!showBars && <SideBar bars={setShowBars} />}
        </>
    );
};
