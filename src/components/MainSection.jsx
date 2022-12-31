import React from 'react'
import { CreatePost, Posts } from './MainSectionComponents'

const MainSection = () => {
  return (
    <main className='mt-[65px] MainSection fc_c pt-6 pb-12 lg:px-16 md:px-[5vw] px-5'>
        <CreatePost />
        <Posts />
    </main>
  )
}

export default MainSection