import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { TooltipRight } from '../common/Tooltips'

const CreatePost = () => {
  return (
    <section className='self-start'>
        <button className='group shadow-md hover:shadow-lg bg-blue-600 hover:bg-blue-700 relative font-medium dark:bg-purple-500 hover:dark:bg-purple-600 transition-all px-4 py-2 text-white rounded-full fc gap-2'>
            Create New Post <FaPlus />
            <TooltipRight more="group-hover:visible group-hover:opacity-100 absolute ml-[270px] w-20" content="New Post" />
        </button>
    </section>
  )
}

export default CreatePost