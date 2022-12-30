import { Navbar, LeftSideBar, RightSideBar, DarkModeSwitcher } from "./components";

function App() {
	return (
		<div className="dark:bg-zinc-900 bg-gray-100 min-h-screen w-full">
			<Navbar />
			<LeftSideBar />
			<RightSideBar />
			<DarkModeSwitcher />
		</div>
	);
}
export default App;

//* imports
// import { useEffect, useState } from "react";
// import { Auth, Account } from "./supabase";
// import { supabase } from "./supabase/client";

//* in function's body
// const [session, setSession] = useState(null);

// useEffect(() => {

//   supabase.auth.getSession().then(({ data: { session } }) => {
//     setSession(session)
//   })

//   supabase.auth.onAuthStateChange((_event, session) => {
//     setSession(session)
//   })

// }, [])

//* in the jsx
{
	/* { !session ? <Auth /> : <Account key={session.user.id} session={session} /> } */
}
