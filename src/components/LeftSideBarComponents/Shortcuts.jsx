import React from 'react'
import Shortcut from './Shortcut'
import { img1, img2, img3, img4 } from '../../assets'

const Shortcuts = () => {
  return (
    <section className='my-3 w-full'>
      <hr className='mb-3 border-gray-400/50' />
      <span className='font-semibold text-lg text-gray-500  dark:text-gray-200/50'>
        Your Shortcuts
      </span>
      <ul className='w-full'>
        <Shortcut img={img1} name="Sky's Stars" />
        <Shortcut img={img2} name="Chess ♟️" />
        <Shortcut img={img3} name="Nature View" />
        <Shortcut img={img4} name="Shine ✨" />
      </ul>
    </section>
  )
}

export default Shortcuts