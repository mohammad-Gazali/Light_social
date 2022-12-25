import React from 'react'

const MenuItem = ({ icon, text }) => {
  return (
    <li className='frsc p-2 cursor-pointer gap-3 text-lg hover:bg-gray-300/50 transition-all rounded w-full dark:hover:bg-gray-200/10'>
        <span className='h-9 w-9 bg-menuItemLight dark:bg-menuItemDark rounded-full fc'>{ icon }</span> {text}
    </li>
  )
}

export default MenuItem