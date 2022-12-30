import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const DoubleImage = ({ img1, img2 }) => {
  return (
    <div className='w-9 h-9 relative'>
        <LazyLoadImage 
        className='object-cover top-0 left-0 rounded-full w-6 h-6 z-10 absolute' 
        src={img1}
        />
        <LazyLoadImage 
        className='object-cover bottom-0 right-0 rounded-full w-6 h-6 absolute' 
        src={img2}
        />
    </div>
  )
}

export default DoubleImage