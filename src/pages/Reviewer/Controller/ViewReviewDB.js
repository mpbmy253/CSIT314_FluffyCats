import React from "react";
import startFirebase from "../../../database/firebase_config";
import { ref, onValue } from "firebase/database";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import { Link } from "react-router-dom";


const db = startFirebase();

class ViewReviewDB extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }


    componentDidMount() {
        const dbRef = ref(db, 'Papers');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(authorSnapshot => {
                let authorKey = authorSnapshot.key;

                snapshot.child(authorSnapshot.key).forEach((paperSnapshot) => {
                    let paperKey = paperSnapshot.key;
                    let paperData = paperSnapshot.val();

                    records.push({ "authorKey": authorKey, "paperKey": paperKey, "paperData": paperData })
                });
            });
            this.setState({ tableData: records });
        });
    }


    render() {
        return (

            <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
                <AfterLoginNavbar />
                <div className="container my-8 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-white mt-20">Your Review</h2>
                    <form action="">
                        {this.state.tableData.map((row, index) => {
                            if (row.paperData.Paper_Title == localStorage.getItem("Paper_Title"))
                                return (
                                    <div className="mt-4">
                                        <div className="mt-4 relative">
                                            <label className="block text-white-700 text-base font-bold" for="Username">Paper Content</label>
                                            <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 h-96"
                                                type="text" value={row.paperData.Paper_Content} disabled
                                            />
                                            <label className="block text-white-700 text-base font-bold" for="Username">Paper Review</label>
                                            <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 h-32"
                                                type="text" value={row.paperData.Review_Content} disabled
                                            />
                                        </div>
                                        <div className="flex">
                                            <div className="flex">
                                                <Link to={`/reviewer-dashboard/acceptedPapers`}
                                                    className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Back
                                                </Link>
                                            </div>

                                            <div className="flex ml-4">
                                                <Link to={`/reviewer-dashboard/acceptedPapers/review/editReview`}
                                                    className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Edit
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )
                        })}
                    </form>
                </div>
            </div>
        )
    }
}
export default ViewReviewDB;