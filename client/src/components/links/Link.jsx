import React from 'react'
import { Link as A }  from 'react-router-dom'

const Link = ({path, children}) => {
    return (
        <A to={path} className='cursor-pointer flex items-center justify-center gap-2.5 select-none hover:underline text-[#1049BD] font-bold px-1.5 text-sm'>
            {children}
        </A>
    )
}

export default Link
