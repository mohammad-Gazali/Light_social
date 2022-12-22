import React from 'react'
import { TooltipBottom } from '../common/Tooltips'

const NavPersonalLink = ({ img, name }) => {
  return (
    <li className='w-10 h-10 group rounded-full text-2xl relative cursor-pointer bg-gray-300 frcc'>
        { img ? img : <span className='font-bold font-mono'>{name[0]}</span> }
        <TooltipBottom content="account" more="group-hover:visible group-hover:opacity-100" />
    </li>
  )
}

export default NavPersonalLink