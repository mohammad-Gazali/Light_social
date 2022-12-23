import { Footer, Menu, Shortcuts } from "./LeftSideBarComponents"


const LefeSideBar = () => {
  return (
    <aside className='px-4 lg:fc_c hidden fixed top-16 left-0 bottom-0 width-1/4 bg-red-400 '>
        <Menu />
        <Shortcuts />
        <Footer />
    </aside>
  )
}

export default LefeSideBar