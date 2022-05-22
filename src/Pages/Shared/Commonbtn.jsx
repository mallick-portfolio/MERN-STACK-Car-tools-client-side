import React from 'react'

const Commonbtn = ({children}) => {
  return (
    <div>
      <button className='px-12 py-3 text-sm text-white rounded-md border-0  bg-gradient-to-r from-secondary to-primary'>{children}</button>
    </div>
  )
}

export default Commonbtn
