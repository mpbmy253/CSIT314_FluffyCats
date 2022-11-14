import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import startFirebase from "../../database/firebase_config"
import { ref, get, child } from "firebase/database";

const LoginPageForAll = () => {

	const [eyeOpen, setEyeOpen] = useState(false);
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [user, setUser] = useState({});
	const [errorMessage, setErrorMessage] = useState("");

	const navigate = useNavigate();

	// To handle Toggle  
	const toggle = () => {
		setEyeOpen(!eyeOpen);
	}

	// function to go Dashboard: side bar tab
	function goSystemAdminDashBoard() {
		navigate("/system-admin-dashboard") // Direct to SystemAdminAfterLoginDashboard.js
	}

	// function to go Dashboard: side bar tab
	function goAuthorDashboard() {
		navigate("/author-dashboard"); // Direct to AuthorAfterLoginDashboard.js
	}

	// function to go Dashboard: side bar tab
	function goReviewierDashboard() {
		navigate("/reviewer-dashboard"); // Direct to ReviewerAfterLoginDashboard.js
	}

	// function to go Dashboard: side bar tab
	function goConferenceChairDashboard() {
		navigate("/conferencechair-dashboard"); // Direct to ConferenceChairAfterLoginDashboard.js
	}

	const login = async () => {
		const db = startFirebase();
		try {
			setUser(username);
			const dbref = ref(db);
			get(child(dbref, "UsersList/" + username)).then((snapshot) => {
				if (snapshot.exists()) {
					let dbrole = snapshot.val().role;
					let dbpass = snapshot.val().password;
					if (dbpass == password) {
						localStorage.setItem("username", username)
						if (dbrole === "System Admin") {
							goSystemAdminDashBoard()
						} else if (dbrole === "Author") {
							goAuthorDashboard()
						} else if (dbrole === "Conference Chair") {
							goConferenceChairDashboard()
						}
						else if (dbrole === "Reviewer") {
							goReviewierDashboard()
						}
						else {
							alert("User does not exist!");
						}
					}
					else {
						alert("Username or Password is invalid!");
					}
				}
			});
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#141e30] to-[#243b55]">
			<div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
				<h3 className="text-2xl font-bold text-center">Sign In</h3>
				<div action="" className="bg-white" >
					<div className="mt-4">

						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								htmlFor="Username"
							>Username</label>
							<input
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								type="text"
								placeholder="E.g joedoe123"
								onChange={e => setUsername(e.target.value)}
							/>
						</div>

						<div className="mt-4 relative">
							<label
								className="block text-black-700 text-base font-bold"
								htmlFor="Password"
							>Password</label>
							<input
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								type={(eyeOpen === false) ? 'password' : 'text'}
								placeholder="******************"
								onChange={e => setPassword(e.target.value)}
							/>
							<div className="text-2xl absolute top-10 right-5">
								{
									(eyeOpen === false) ? <AiFillEyeInvisible onClick={toggle} /> : <AiFillEye onClick={toggle} />
								}
							</div>
						</div>

						<div className="flex">
							<button
								className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								onClick={login}
							>Sign In</button>
						</div>

					</div>
				</div>
			</div>
		</div>

	)
}
export default LoginPageForAll;