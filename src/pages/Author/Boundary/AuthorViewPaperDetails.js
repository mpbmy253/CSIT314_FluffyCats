import React from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import { ref, onValue } from "firebase/database";
import startFirebase from "../../../database/firebase_config";

const AuthorViewPaperDetails = () => {
	const navigate = useNavigate();

	function editpaperdetails() {
		navigate("/author-editpaperdetails"); // Direct to AuthorEditPaperDetails.js
	}

	function viewpaper() {
		navigate("/author-viewpaper"); // Direct to AuthorViewPaper.js
	}
	var paperTitle;
	var paperCategory;
	var paperContent;
	var paperCoAuthor;
	var records = [];
	getPapers();

	function getCurrentURL() {
		return window.location.href;
	}

	function getPapers() {
		const db = startFirebase();
		const reference = ref(db, "Papers/");
		var paperId = localStorage.getItem(paperId);

		onValue(reference, (snapshot) => {
			snapshot.forEach((authorSnapshot) => {
				let authorKey = authorSnapshot.key;
				snapshot.child(authorSnapshot.key).forEach((paperSnapshot) => {
					let paperKey = paperSnapshot.key;
					let paperData = paperSnapshot.val();

					if (getCurrentURL().includes(paperData.Paper_ID)) {
						paperTitle = paperData.Paper_Title;
						paperCategory = paperData.Category;
						paperContent = paperData.Paper_Content;
						paperCoAuthor = paperData.Co_AuthorName;
					}
				});
			});
		});
	}

	return (
		<div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white ">
			<AfterLoginNavbar />
			<div className="container my-8 px-6">
				<h2 className="text-3xl font-bold mb-6 text-white mt-20">
					View Paper Details
				</h2>
				<div>
					<div className="mt-4">
						<div className="mt-4">
							<label
								lassName="block text-black-700 text-base font-bold"
								for="PaperTitle"
							>
								Paper Title
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
								type="text"
								value={paperTitle}
								readOnly={true}
							/>
						</div>

						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								for="PaperCategory"
							>
								Paper Category
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
								type="text"
								value={paperCategory}
								readOnly={true}
							/>
						</div>

						<div className="mt-4 relative">
							<label
								className="block text-black-700 text-base font-bold"
								for="PaperContent"
							>
								Paper Content
							</label>
							<textarea
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 h-96"
								value={paperContent}
								readOnly={true}
							></textarea>
						</div>

						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								for="names"
							>
								Co-Author Name
							</label>
							<input
								className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
								type="text"
								value={paperCoAuthor}
								readOnly={true}
							/>
						</div>

						<div className="flex">

							<button
								className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								onClick={viewpaper}
							>
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthorViewPaperDetails;