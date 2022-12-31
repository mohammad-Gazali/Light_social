import { Navbar, LeftSideBar, RightSideBar, DarkModeSwitcher, MainSection } from "./components";
import { useState, useEffect } from "react";
import { supabase } from "./supabase/client";
// import { Auth, Account } from "./supabase";

function App() {
	return (
		<div className="dark:bg-zinc-900 bg-gray-100 min-h-screen w-full lg:frc_ md:frs_ frc_ px-4">
			<Navbar />
			<LeftSideBar />
			<MainSection />
			<RightSideBar />
			<DarkModeSwitcher />
		</div>
	);
}
export default App;


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
