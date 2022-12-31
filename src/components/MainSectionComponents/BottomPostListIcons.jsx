import React from 'react'
import BottomPostIconButton from './BottomPostIconButton'
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi"

const BottomPostListIcons = () => {
  return (
    <ul className='flex'>
        <BottomPostIconButton icon={<AiFillLike className='text-2xl' />} name="like" more="rounded-bl-lg" />
        <BottomPostIconButton icon={<FaRegComment className='text-2xl' />} name="comment" />
        <BottomPostIconButton icon={<BiShare className='text-2xl' />} name="share" more="rounded-br-lg" />
    </ul>
  )
}

export default BottomPostListIcons