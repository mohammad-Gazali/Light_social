import { NavRightLinkList, NavMiddleLinkList, NavLeftSection } from "./NavbarComponents";

const Navbar = () => {
	return (
		<nav className="w-full fixed top-0 dark:border-b-[1px] border-white/10 left-0 right-0 frbc py-3 px-4 bg-white dark:bg-zinc-800 shadow">
			<NavLeftSection />
			<NavMiddleLinkList />
			<NavRightLinkList />
		</nav>
	);
};

export default Navbar;
