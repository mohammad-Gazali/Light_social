import React from 'react'

const BottomPostIconButton = ({ icon, name, more }) => {
  return (
    <li className={`${more} w-1/3 fc py-2 gap-2 text-lg font-medium cursor-pointer transition-all text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:dark:text-purple-500 hover:bg-gray-200/75 hover:dark:bg-gray-200/5`}>
        {icon} {name}
    </li>
  )
}

export default BottomPostIconButton