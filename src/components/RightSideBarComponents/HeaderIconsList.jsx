import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import HeaderIcon from "./HeaderIcon";

const HeaderIconsList = () => {
  return (
    <ul className='fc gap-2'>
        <HeaderIcon name="new call" icon={<BiVideoPlus/>} />
        <HeaderIcon name="search" icon={<AiOutlineSearch />} />
        <HeaderIcon name="options" icon={<BsThreeDots />} />
    </ul>
  )
}

export default HeaderIconsList