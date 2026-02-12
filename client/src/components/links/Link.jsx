import React from 'react'
import { Link as A }  from 'react-router-dom'

const Link = ({label, path}) => {
    return (
        <A to={path} className='cursor-pointer select-none hover:underline text-[#1049BD] font-bold px-1.5 text-sm'>
            {label}
        </A>
    )
}

export default Link
