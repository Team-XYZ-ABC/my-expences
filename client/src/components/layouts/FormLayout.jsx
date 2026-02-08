import React from 'react'

const FormLayout = (props) => {
    return (
        <div className='min-w-120 border border-gray-300 p-5'>
            {props.children}
        </div>
    )
}

export default FormLayout
