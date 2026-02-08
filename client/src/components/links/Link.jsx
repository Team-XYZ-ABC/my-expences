import React from 'react'

const Link = ({label}) => {
    return (
        <p className='cursor-pointer select-none hover:underline text-[#1049BD] font-bold px-1.5 text-sm'>
            {label}
        </p>
    )
}

export default Link
