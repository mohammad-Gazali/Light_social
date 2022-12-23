import React from 'react'

const MenuItem = ({ icon, text }) => {
  return (
    <li className='fc gap-3 text-lg'>
        { icon } {text}
    </li>
  )
}

export default MenuItem