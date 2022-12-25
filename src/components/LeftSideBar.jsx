import { Footer, Menu, Shortcuts } from "./LeftSideBarComponents"


const LefeSideBar = () => {
  return (
    <aside className='LeftSideBar py-4 pr-1 overflow-y-scroll pl-4 lg:fc_s hidden fixed top-[65px] left-0 bottom-0 w-1/4 dark:text-white'>
        <Menu />
        <Shortcuts />
        <Footer />
    </aside>
  )
}

export default LefeSideBar