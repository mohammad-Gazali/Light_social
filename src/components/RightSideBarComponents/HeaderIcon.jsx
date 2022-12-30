import React from 'react'
import { TooltipBottom } from '../common/Tooltips'

const HeaderIcon = ({ icon, name }) => {
  return (
    <li className='cursor-pointer group w-10 h-10 rounded-full text-2xl hover:bg-gray-300/50 frcc dark:hover:bg-gray-200/10'>
        {icon}
        <TooltipBottom content={name} more="group-hover:visible group-hover:opacity-100" />
    </li>
  )
}

export default HeaderIcon