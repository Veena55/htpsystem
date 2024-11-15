import React from 'react'

export const FeatureCards = ({ logo, content }) => {
    return (
        <div className="bg-themeLight text-center rounded-lg px-10 py-7 flex flex-col items-center gap-3">
            <div className='text-theme2 text-4xl'>{logo}</div>
            <div className="text-slate-400 text-base">{content}</div>
        </div>
    )
}
