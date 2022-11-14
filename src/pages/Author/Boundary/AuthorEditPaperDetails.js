import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import { ref, onValue, update, } from "firebase/database";
import startFirebase from "../../../database/firebase_config";

const options = [
	{
		label: "Politics",
		value: "Politics",
	},
	{
		label: "Entertainment",
		value: "Entertainment",
	},
	{
		label: "Mental Health",
		value: "Mental Health",
	},
	{
		label: "Local News",
		value: "Local News",
	},
];

const AuthorViewPaperDetails = () => {
	getPapers();
	var paperTitle;
	var paperCategory;
	var paperContent;
	var paperCoAuthor;
	var paperId;
	var publishedBy;
	var claimedBy;
	var isClaimed = new Boolean();

	const [paperTitle1, setPaperTitle] = useState();
	const [paperCategory1, setPaperCategory] = useState();
	const [paperContent1, setPaperContent] = useState();
	const [paperCoAuthor1, setCoAuthorName] = useState();
	const [choice, setChoice] = useState();

	const navigate = useNavigate();

	const handleChange = (event) => {
		setPaperTitle(event.target.value);
	};


	function submitpaper() {
		updatePaper(paperTitle1, paperCategory1, paperContent1, paperCoAuthor1, isClaimed, paperId, claimedBy, publishedBy);
		alert("Update successful");
		navigate("/author-viewpaper");
	}

	function cancelchanges() {
		navigate("/author-viewpaper");
	}

	function getCurrentURL() {
		return window.location.href;
	}

	function getPapers() {
		const db = startFirebase();
		const reference = ref(db, "Papers/");
		var paperKey;

		paperId = localStorage.getItem(paperId);

		var date = new Date();
		var datetime =
			date.getDate() +
			"-" +
			(date.getMonth() + 1) +
			"-" +
			date.getFullYear() +
			"_" +
			date.getHours() +
			":" +
			date.getMinutes();

		onValue(reference, (snapshot) => {
			snapshot.forEach((authorSnapshot) => {
				let authorKey = authorSnapshot.key;
				snapshot.child(authorSnapshot.key).forEach((paperSnapshot) => {
					let paperKey = paperSnapshot.key;
					let paperData = paperSnapshot.val();

					if (getCurrentURL().includes(paperData.Paper_ID)) {
						localStorage.setItem("paperKey", paperKey);
						paperTitle = paperData.Paper_Title;
						paperCategory = paperData.Category;
						paperContent = paperData.Paper_Content;
						paperCoAuthor = paperData.Co_AuthorName;
						publishedBy = datetime;
						isClaimed = paperData.isClaimed;
						claimedBy = paperData.ClaimedBy;
						paperId = paperData.Paper_ID;
					}
				});
				var paperKey = localStorage.getItem(paperKey);
			});

		});
	}

	function updatePaper(paperTitle1, paperCategory1, paperContent1, paperCoAuthor1, isClaimed, paperId, claimedBy, publishedBy) {
		const ab = startFirebase();
		var paperKey1 = localStorage.getItem("paperKey");
		var userName = localStorage.getItem("username");
		const referal = ref(ab, "Papers/" + userName + "/" + paperKey1);

		update(referal, {
			ClaimedBy: claimedBy,
			Paper_Title: paperTitle1,
			Paper_Content: paperContent1,
			IsClaimed: isClaimed,
			Category: paperCategory1,
			Co_AuthorName: paperCoAuthor1,
			Category: paperCategory1,
			PublishedBy: publishedBy,
			Paper_ID: paperId,
			Review_Content: ""

		});
	}

	return (
		<div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white ">
			<AfterLoginNavbar />
			<div className="container my-8 px-6">
				<h2 className="text-3xl font-bold mb-6 text-white mt-20">
					Edit Paper Details
				</h2>
				<div>
					<div className="mt-4">
						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								for="PaperTitle"
							>
								Paper Title
							</label>
							<input
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
								type="text"
								id="paperTitle1"
								defaultValue={paperTitle}
								onChange={(e) => setPaperTitle(e.target.value)}
								required
							/>
						</div>

						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								for="PaperCategory"
							>
								Paper Category ( Choose one) (Politics, Entertainment , Mental Health , Local News)
							</label>

							<textarea
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
								defaultValue={paperCategory}
								onChange={(e) => setPaperCategory(e.target.value)}
							></textarea>
						</div>

						<div className="mt-4 relative">
							<label
								className="block text-black-700 text-base font-bold"
								for="PaperContent"
							>
								Paper Content
							</label>
							<textarea
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black h-96"
								id="content"
								defaultValue={paperContent}
								onChange={(e) => setPaperContent(e.target.value)}
							></textarea>
						</div>

						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								for="Username"
							>
								Co-Author Name
							</label>
							<input
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
								type="text"
								defaultValue={paperCoAuthor}
								onChange={(e) => setCoAuthorName(e.target.value)}
								required
							/>
						</div>

						<div className="flex">
							<button
								className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								onClick={submitpaper}
							>
								Save
							</button>
							<button
								className="w-50 px-6 py-2 mt-4 ml-5 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								onClick={cancelchanges}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthorViewPaperDetails;