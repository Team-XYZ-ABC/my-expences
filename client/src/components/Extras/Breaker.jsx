import React from 'react'

const Breaker = ({label}) => {
    return (
        <div className='w-full flex items-center justify-center py-7'>
            <div className='bg-gray-300 h-px w-full'></div>
            <p className='absolute translate-X-[50%] text-sm px-5 text-gray-500 font-medium bg-white'>{label}</p>
        </div>
    )
}

export default Breaker
