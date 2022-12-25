import React from "react";
import { BsFillBellFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoApps } from "react-icons/io5";
import { img } from "../../assets";
import NavIconLink from "./NavIconLink";
import NavPersonalLink from "./NavPersonalLink";

const NavRightLinkList = () => {
	return (
		<ul className="fr_c gap-3 h-full">
			<NavIconLink icon={<IoApps />} name="main" />
			<NavIconLink icon={<BsFillChatDotsFill />} name="chat" />
			<NavIconLink icon={<BsFillBellFill />} name="notifications" />
			<NavPersonalLink
				img={<img className="object-cover w-full h-full rounded-full" src={img} />}
				name="Rami"
			/>
		</ul>
	);
};

export default NavRightLinkList;
