import React from "react";
import startFirebase from "../../../database/firebase_config";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";

const db = startFirebase();

class ToViewAllPaperData extends React.Component {
	constructor() {
		super();

		this.state = {
			tableData: [],
		};
	}

	username = localStorage.getItem(this.username);
	componentDidMount() {
		const dbRef = ref(db, "Papers");

		var username = localStorage.getItem("username");
		onValue(dbRef, (snapshot) => {
			let records = [];
			snapshot.forEach((authorSnapshot) => {
				let authorKey = authorSnapshot.key;
				if (authorKey == username) {

					snapshot.child(authorSnapshot.key).forEach((paperSnapshot) => {
						let paperKey = paperSnapshot.key;
						let paperData = paperSnapshot.val();
						localStorage.setItem("paperId", paperData.id);
						records.push({

							authorKey: authorKey,
							paperKey: paperKey,
							paperData: paperData,
						});

					}
					);
				}
			});
			this.setState({ tableData: records });
		});
	}

	render() {
		return (
			<div className="container flex flex-col ml-3">
				<div className="overflow-x-auto  sm:-mx-7 items-center lg:-mx-8 ">
					<div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
						<div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
							<table className="min-w-full text-center">
								<thead className="border-b bg-gray-800">
									<tr>
										<th className="text-sm font-medium text-white px-6 py-4">
											Paper ID
										</th>
										<th className="text-sm font-lg text-white px-6 py-4">
											Paper Title
										</th>
										<th className="text-sm font-lg text-white px-6 py-4">
											Paper Category
										</th>
										<th className="text-sm font-lg text-white px-6 py-4">
											Authors
										</th>
										<th className="text-sm font-lg text-white px-6 py-4">
											Published Date
										</th>

										<th className="text-sm font-lg text-white px-6 py-4">
											Action
										</th>
									</tr>
								</thead>
								<tbody className=" border-black border-b-2">
									{this.state.tableData.map((row, index) => {
										return (
											<tr
												key={index}
												className="bg-white border-b-2 border-black hover:bg-gray-300"
											>
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
													{index + 1}
												</td>
												<td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
													{row.paperData.Paper_Title}
												</td>
												<td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
													{row.paperData.Category}
												</td>

												<td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
													{row.authorKey}
												</td>

												<td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
													{row.paperData.PublishedBy}
												</td>

												<td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-2 space-x-4 whitespace-nowrap">
													<Link id="view"
														to={`/author-viewpaperdetails/${row.paperData.Paper_ID}`}
														className="bg-teal-600 text-white mx-2 px-6 py-2 rounded-lg hover:bg-teal-800"
													>
														View
													</Link>
													<div>

													</div>
													<Link
														to={`/author-editpaperdetails/${row.paperData.Paper_ID}`}
														className="bg-blue-600 text-white mx-2 px-6 py-2 rounded-lg hover:bg-blue-800"
													>
														Edit Paper
													</Link>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ToViewAllPaperData;