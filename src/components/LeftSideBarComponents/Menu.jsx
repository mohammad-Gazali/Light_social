import { MdGroups } from "react-icons/md";
import MenuItem from "./MenuItem";
import MenuPersonalItem from "./MenuPersonalItem";

const Menu = () => {
  return (
    <ul>
        <MenuItem icon={<MdGroups className="text-3xl" />} text="Search For Friends" />
    </ul>
  )
}

export default Menu