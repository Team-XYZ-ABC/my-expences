import React from 'react'

const TitleDescription = ({title, description}) => {
    return (
        <div className='py-5'>
        <p className='text-4xl text-start font-semibold'>{title}</p>
        <p className='text-sm text-gray-500 text-start'>{description}</p>
        </div>
    )
}

export default TitleDescription
