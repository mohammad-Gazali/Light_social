import { useState } from "react";
import { supabase } from "./client";

const Auth = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert("Check your email for the login link!");
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="fc p-4 border">
			<div className="fcc gap-5" aria-live="polite">
				<h1 className="text-4xl font-bold">Sign In</h1>
				<p className="text-center font-mono">
					Sign in via magic link with your email below
				</p>
				{loading ? (
					"Sending magic link..."
				) : (
					<form className="flex w-full" onSubmit={handleLogin}>
						<label className="hidden" htmlFor="email">Email</label>
						<div className="flex justify-between w-full">
							<input
								id="email"
								className="bg-gray-200 rounded-lg grow focus:outline-none border-none px-2"
								type="email"
								placeholder="Your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<button className="rounded-lg ml-3 bg-green-600 px-4 py-2 text-white" aria-live="polite">
								Sign In
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default Auth