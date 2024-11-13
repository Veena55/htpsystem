import React, { useState } from 'react';
import logo from '../assets/htpsLogo.png';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import SideBar from './SideBar';

export const Navbar = () => {
    const [showBars, setShowBars] = useState(true);

    return (
        <>
            <div className="flex justify-between items-start px-10 pt-2 py-5 text-theme2 relative z-50">
                <div>
                    <img src={logo} alt="htpsystem-logo" width={80} />
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
