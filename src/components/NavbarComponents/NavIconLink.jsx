import React from 'react'
import { TooltipBottom } from '../common/Tooltips'

const NavIconLink = ({ icon, name }) => {
  return (  
    <li className='w-10 h-10 group cursor-pointer relative rounded-full text-lg bg-gray-300 frcc hover:bg-gray-400/70 dark:text-white dark:bg-zinc-600/50 dark:hover:bg-zinc-500'>
        { icon }
        <TooltipBottom content={name} more="group-hover:visible group-hover:opacity-100" />
    </li>
  )
}

export default NavIconLink