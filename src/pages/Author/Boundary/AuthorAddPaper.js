import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import { ref,set} from "firebase/database";
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
		label: "Mental Health ",
		value: "Mental Health",
	},
	{
		label: "Local News ",
		value: "localNews",
	},
	{
		label: "Memes ",
		value: "Memes",
	},
];

const AuthorAddPaper = () => {

	const navigate = useNavigate();

	const [paperTitle, setPaperTitle] = useState();
	const [paperCategory, setPaperCategory] = useState();
	const [paperContent, setPaperContent] = useState();
	const [coAuthorName, setCoAuthorName] = useState();

	var username = localStorage.getItem("username");

	console.log(paperContent);
	function submitpaper() {
		addPaper(paperTitle, paperCategory, paperContent, coAuthorName);
		alert("Paper submit successful!");
		navigate("/author-viewpaper");
	}

	function addPaper(paperTitle, paperCategory, paperContent, coAuthorName) {
		const ab = startFirebase();
		var username = localStorage.getItem("username");
		var count = localStorage.getItem("count");
		
		if (count === null) {
			count = 1;
		} else {
			count++;
		}

		localStorage.setItem("count", count);

		const referal = ref(ab, "Papers/" + username + "/" + "paper_" + count);

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

		set(referal, {
			ClaimedBy: "",
			Category: paperCategory,
			IsClaimed: false,
			Paper_Content: paperContent,
			Paper_ID: username + "_" + count,
			Paper_Title: paperTitle,
			PublishedBy: datetime,
			Co_AuthorName: coAuthorName,
			Review_Content: ""
		});
	}

	function backtoauthorhome() {
		navigate("/author-dashboard");
	}

	return (
		<div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white ">
			<AfterLoginNavbar />
			<div className="container my-8 px-6">
				<h2 className="text-3xl font-bold mb-6 text-white mt-20">Add Paper</h2>
				<div action="">
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
								onChange={(e) => setPaperTitle(e.target.value)}
								required
							/>
						</div>

						<div className="mt-4">
							<label
								className="block text-black-700 text-base font-bold"
								for="PaperCategory"
							>
								Paper Category
							</label>
							<select
								onChange={(e) => setPaperCategory(e.target.value)}
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
							>
								{options.map((option) => (
									<option value={option.value}>{option.label}</option>
								))}
							</select>
						</div>

						<div className="mt-4 relative">
							<label className="block text-black-700 text-base font-bold">
								Paper Content
							</label>
							<textarea
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black h-96"
								onChange={(e) => setPaperContent(e.target.value)}
							></textarea>
						</div>

						<div className="mt-4">
							<label className="block text-black-700 text-base font-bold">
								Co-Author Name
							</label>
							<input
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
								type="text"
								onChange={(e) => setCoAuthorName(e.target.value)}
								required
							/>
						</div>

						<div className="flex">
							<button
								className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								onClick={submitpaper}
							>
								Submit
							</button>
							<button
								className="w-50 px-6 py-2 mt-4 ml-5  text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								onClick={backtoauthorhome}
							>
								Back to Home
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AuthorAddPaper;
