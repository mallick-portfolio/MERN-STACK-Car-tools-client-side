import React from 'react'

const Commonbtn = ({children}) => {
  return (
    <div>
      <button className='px-4 py-1 sm:px-12 sm:py-3 text-sm text-white rounded-md border-0 bg-neutral'>{children}</button>
    </div>
  )
}

export default Commonbtn
