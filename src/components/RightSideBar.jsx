import React from "react";
import { Contacts, MultiChats, Header } from "./RightSideBarComponents";

const RightSideBar = () => {
  return (
    <aside className='RightSideBar py-4 pl-2 overflow-y-scroll pr-4 md:fc_s hidden fixed top-[65px] right-0 bottom-0 dark:text-white'>
        <Header />
        <Contacts />
        <MultiChats />
    </aside>
  )
}

export default RightSideBar