import React from 'react'
import { TooltipBottom } from '../common/Tooltips'

const NavMiddleLink = ({ icon, name, active, clickFunc, number }) => {
  return (
    <li data-number={number} className={`cursor-pointer group h-10 frcc w-20 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-50/10 text-3xl ${active ? "text-blue-600" : "text-gray-600 dark:text-gray-400" }`} onClick={clickFunc} >
        { icon }
        <TooltipBottom content={name} more="group-hover:visible group-hover:opacity-100 mt-[100px]" />
        <div className={`${active ? "" : "hidden" } absolute w-20 h-[2px] bg-blue-500 -bottom-[12px]`} />
    </li>
  )
}

export default NavMiddleLink