import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import NavMiddleLink from "./NavMiddleLink";

const NavMiddleLinkList = () => {
	const [activeArray, setAcctiveArray] = useState([1, 0, 0, 0]);

	const handleMiddleLinks = (e) => {
		const linkNum = parseInt(e.target.dataset.number);
		setAcctiveArray(() => {
			let arrResult = [0, 0, 0, 0];
			arrResult[linkNum] = 1;
			return arrResult;
		});
	};

	return (
		<ul className="md:fr_c hidden h-full relative">
			<NavMiddleLink
					number={0}
					active={activeArray[0] ? true : false}
					icon={<AiFillHome className="pointer-events-none" />}
					name="home"
					clickFunc={handleMiddleLinks}
			/>
			<NavMiddleLink
				number={1}
				active={activeArray[1] ? true : false}
				icon={<MdOndemandVideo className="pointer-events-none" />}
				name="watch"
				clickFunc={handleMiddleLinks}
			/>
			<NavMiddleLink
				number={2}
				active={activeArray[2] ? true : false}
				icon={<HiUserGroup className="pointer-events-none" />}
				name="groups"
				clickFunc={handleMiddleLinks}
			/>
			<NavMiddleLink
				number={3}
				active={activeArray[3] ? true : false}
				icon={<IoGameController className="pointer-events-none" />}
				name="games"
				clickFunc={handleMiddleLinks}
			/>
		</ul>
	);
};

export default NavMiddleLinkList;
