import React from 'react';
import DoubleImage from './DoubleImage';

const MultiChat = ({ names, imgs }) => {
  return (
    <li className='frsc p-2 cursor-pointer gap-3 text-md hover:bg-gray-300/50 transition-all rounded w-full dark:hover:bg-gray-200/10'>
      <DoubleImage img1={imgs[0]} img2={imgs[1]} />
      <span className='truncate'>
        {names[0]} and {names[1]}{names.length > 2 ? "..." : ""}
      </span>
    </li>
  )
}

export default MultiChat