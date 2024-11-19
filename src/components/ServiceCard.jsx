import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export const ServiceCard = ({ logo, title, gap, content, list }) => {


    return (
        <div className={`bg-themeLight p-7 lg:p-10 rounded-lg flex flex-col h-full justify-start items-center gap-5 ${gap}`}>
            <div className='bg-white border p-2 text-theme2 rounded-md'>
                {logo}
            </div>
            <div>
                <h1 className='text-theme2 text-center text-md text-xl lg:text-2xl font-medium'>{title}</h1>
                <p className='text-left text-gray-400 pt-5 pb-2 text-base'>{content}</p>
                <div className="text-base text-gray-400 text-left">
                    {list && list.map((item, index) => {
                        return (
                            <div className='flex items-center gap-5 pt-2'>
                                <FiCheckCircle className="text-red-500" />
                                <p>{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
