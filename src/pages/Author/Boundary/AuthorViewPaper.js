import React from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";


import ToViewAllPaperData from "../Controller/ViewAllPaperData";

const AuthorViewPaper = () => {
	const navigate = useNavigate();

	function backtoauthorhome() {
		navigate("/author-dashboard"); // Direct to AuthorAfterLoginDashboard.js
	}

	return (
		<div className="flex items-left justify-center w-screen min-h-screen bg-gray-500">
			<AfterLoginNavbar />
			<div className="container my-8 px-6">
				<h2 className="text-3xl font-bold mb-6 text-white mt-20">
					View Papers
				</h2>

				<ToViewAllPaperData></ToViewAllPaperData>

				<div className="flex items-left justify-right">
					<button
						className="w-50 px-6 py-2 mt-4 ml-3  text-white bg-blue-600 rounded-lg hover:bg-blue-900"
						onClick={backtoauthorhome}
					>
						Back to Home
					</button>
				</div>
			</div>
		</div>
	);
};

export default AuthorViewPaper;