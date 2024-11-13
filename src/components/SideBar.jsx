import React, { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';

const SideBar = ({ bars }) => {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle sidebar visibility
    useEffect(() => {
        setShowMenu(true);
    }, []);

    const closeSidebar = () => {
        setShowMenu(false);
        setTimeout(() => bars(true), 50); // Delay to match sidebar closing animation
    };

    return (
        <>
            {/* Overlay */}
            {showMenu && (
                <div
                    className="fixed inset-0 bg-[rgba(96,90,249,0.5)] z-[500] transition-opacity duration-500"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-[rgb(96,90,249)] shadow-xl z-[1000] flex flex-col transition-transform duration-500 ${showMenu ? 'translate-x-0 w-[20%]' : 'translate-x-full w-0'
                    }`}
            >
                <div className="p-5 flex justify-end">
                    <CgClose
                        className="text-white text-3xl cursor-pointer"
                        onClick={closeSidebar}
                    />
                </div>
                <div className="text-white text-xl flex flex-col gap-5 justify-start items-center px-10">
                    <div><a href="#home">Home</a></div>
                    <div><a href="#about">About</a></div>
                    <div><a href="#services">Services</a></div>
                    <div><a href="#contact" className="text-htpSystem py-2 px-5 mt-5 rounded-full bg-white font-semibold text-lg">Contact Us</a></div>
                </div>
            </div>
        </>
    );
};

export default SideBar;