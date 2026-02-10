import React from 'react'

const Title = ({children}) => {
  return (
    <div>
      <p className='text-4xl text-start font-semibold select-none'>{children}</p>
    </div>
  )
}

export default Title
