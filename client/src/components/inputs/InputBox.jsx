import React from 'react'

const InputBox = ({type, label, placeholder, children}) => {
    return (
        <div className='w-full py-2.5'>
            <p className='py-1'>{label}</p>
            {children}
        </div>
    )
}

export default InputBox
