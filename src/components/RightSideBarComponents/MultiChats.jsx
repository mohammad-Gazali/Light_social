import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { multiChats } from '../../constants/multiChats';
import MultiChat from './MultiChat';

const MultiChats = () => {
  return (
    <section className='w-full my-3'>
        <hr className='mb-3 border-gray-400/50' />
        <span className='font-semibold text-lg text-gray-500  dark:text-gray-200/50'>
          Multi Chats
        </span>
        <ul className='fc_s w-full'>
          {multiChats.map(mc => {
            return <MultiChat key={mc.id} names={mc.names} imgs={mc.imgs} />
          })}
          <li className='frsc p-2 cursor-pointer gap-3 text-md hover:bg-gray-300/50 transition-all rounded w-full dark:hover:bg-gray-200/10'>
            <span className='h-9 w-9 dark:text-purple-500 text-blue-600 bg-menuItemLight text-lg dark:bg-menuItemDark rounded-full fc'><BsPlusCircle /></span> New Multi Chat
          </li>
        </ul>
    </section>
  )
}

export default MultiChats