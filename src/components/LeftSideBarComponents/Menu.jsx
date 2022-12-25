import { BsPeopleFill, BsFillBookmarkFill, BsFlag, BsFillCalendarCheckFill, BsFillChatDotsFill, BsFillStarFill } from "react-icons/bs";
import { HiUserGroup, HiOutlineNewspaper } from "react-icons/hi2";
import { MdOndemandVideo } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { img } from "../../assets";
import MenuItem from "./MenuItem";
import MenuPersonalItem from "./MenuPersonalItem";

const Menu = () => {
  return (
    <ul className="fc_s w-full">
        <MenuPersonalItem img={img} username="Mohammed Algazali" />
        <MenuItem icon={<BsPeopleFill className="dark:text-purple-500 text-blue-600" />} text="Search For Friends" />
        <MenuItem icon={<HiUserGroup className="dark:text-purple-500 text-blue-600" />} text="Groups" />
        <MenuItem icon={<HiOutlineNewspaper className="dark:text-purple-500 text-blue-600" />} text="Recently" />
        <MenuItem icon={<MdOndemandVideo className="dark:text-purple-500 text-blue-600" />} text="Watch" />
        <MenuItem icon={<RxCounterClockwiseClock className="dark:text-purple-500 text-blue-600" />} text="Memories" />
        <MenuItem icon={<BsFillBookmarkFill className="dark:text-purple-500 text-blue-600" />} text="Saved Posts" />
        <MenuItem icon={<BsFlag className="dark:text-purple-500 text-blue-600" />} text="Pages" />
        <MenuItem icon={<BsFillCalendarCheckFill className="dark:text-purple-500 text-blue-600" />} text="Events" />
        <MenuItem icon={<BsFillChatDotsFill className="dark:text-purple-500 text-blue-600" />} text="Chat" />
        <MenuItem icon={<BsFillStarFill className="dark:text-purple-500 text-blue-600" />} text="Favorites" />
    </ul>
  )
}

export default Menu