import React from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";

const ReviewerAfterLoginDashboard = () => {

	const navigate = useNavigate();

	// Function toViewPaperToBid
	function toViewPaperToBid() {
		navigate("/reviewer-dashboard/bidPapers") // Direct to ViewListOfPapers.js
	}

	// Function toViewAcceptedPapers
	function toViewAcceptedPapers() {
		navigate("/reviewer-dashboard/acceptedPapers") // Direct to ViewListOfAcceptedPapers.js
	}

	// Function to setWorkload
	function toSetWorkload() {
		navigate("/reviewer-dashboard/setWorkload") // Direct to SetWorkload.js
	}

	localStorage.removeItem("Paper_Title");
	console.log(localStorage.getItem("Paper_Title"));
	return (
		<div className="flex items-center justify-center w-full min-h-screen bg-gray-900">
			<AfterLoginNavbar />

			<div>
				<button
					onClick={toViewPaperToBid}
					className="px-20 py-7 text-white bg-gray-600 rounded-md shadow hover:bg-gray-400"
				>
					View papers to Bid
				</button>
			</div>
			<div className="px-10"></div>
			<div>
				<button
					onClick={toViewAcceptedPapers}
					className="px-20 py-7 text-white bg-gray-600 rounded-md shadow hover:bg-gray-400"
				>
					View Accepted Papers
				</button>
			</div>
			<div className="px-10"></div>
			<div>
				<button
					onClick={toSetWorkload}
					className="px-20 py-7 text-white bg-gray-600 rounded-md shadow hover:bg-gray-400"
				>
					Set Workload
				</button>
			</div>
		</div>
	);
};

export default ReviewerAfterLoginDashboard;
