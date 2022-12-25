import React from 'react'

const Shortcut = ({ img, name }) => {
  return (
    <li className='frsc p-2 w-full cursor-pointer gap-3 text-lg font-medium hover:bg-gray-300/50 transition-all rounded dark:hover:bg-gray-200/10'>
        <img className='object-cover w-9 h-9 rounded-[0.8rem]' src={img} alt={name} /> {name}
    </li>
  )
}

export default Shortcut