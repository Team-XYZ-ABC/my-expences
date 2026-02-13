import React from 'react'

const Description = ({children}) => {
  return (
    <p className='text-sm flex items-center gap-2.5 text-gray-500 text-start  flex-wrap select-none'>{children}</p>
  )
}

export default Description
