import React from 'react'

const LinedBackground = () => {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 flex w-95 md:!w-4/5 h-full border-r border-l border-[#1a1a1a] ">
            <div className="hidden md:block w-1/4 h-full border-r border-[#1a1a1a]"></div>
            <div className="w-1/2 md:w-1/4 h-full border-r border-[#1a1a1a]"></div>
            <div className="hidden md:block w-1/4 h-full border-r border-[#1a1a1a]"></div>
        </div>
    )
}

export default LinedBackground