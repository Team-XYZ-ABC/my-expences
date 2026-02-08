import React from 'react'

const Input = ({placeholder, type="text"}) => {
    return (
        <input type={type} className='w-full py-4 rounded-md border border-gray-300 px-2.5' placeholder={placeholder} />
    )
}

export default Input
