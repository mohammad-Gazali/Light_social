import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Contact = ({ img, username }) => {
  return (
    <li className='frsc p-2 cursor-pointer gap-3 text-lg hover:bg-gray-300/50 transition-all rounded w-full dark:hover:bg-gray-200/10'>
      <LazyLoadImage 
      className='object-cover h-9 w-9 rounded-full' 
      src={img} 
      alt={username} 
      /> { username }
    </li>
  )
}

export default Contact