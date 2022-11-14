import React from "react";
import startFirebase from "../../../database/firebase_config";

import { getDatabase, ref, onValue, update } from "firebase/database";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import { Link, Navigate } from "react-router-dom";

const db = startFirebase();

class EditReviewDB extends React.Component {
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

    handleChange = (e) => {
        localStorage.setItem("currentReview", e.target.value)

        console.log(localStorage.getItem("currentReview"))
    };

    // Function changeReview
    changeReview = (e) => {
        console.log(localStorage.getItem("currentReview"));
        const db = getDatabase();
        const userRef = ref(db, "Papers/" + localStorage.getItem("Paper_Author") + "/" + localStorage.getItem("Paper_ID"));

        update(userRef, {
            'Review_Content': localStorage.getItem("currentReview")
        })
    }

    // Function toGoBack
    toGoBack = (e) => {
        <Navigate to={'/reviewer-dashboard/acceptedPapers/review'} />
    }

    render() {
        return (

            <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white ">
                <AfterLoginNavbar />
                <div className="container my-8 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-white mt-20">Your Review</h2>
                    <form action="">
                        {this.state.tableData.map((row, index) => {
                            if (row.paperData.Paper_Title == localStorage.getItem("Paper_Title"))
                                return (
                                    <div className="mt-4">
                                        <div className="mt-4 relative">
                                            <label className="block text-black-700 text-base font-bold" for="Username">Paper Review</label>
                                            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
                                                type="text"
                                                placeholder={row.paperData.Review_Content}
                                                onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="flex">
                                            <div className="flex">
                                                <button
                                                    className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                                                    onClick={this.toGoBack}>Back
                                                </button>
                                            </div>

                                            <div className="flex ml-4">
                                                <button className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                                                    onClick={this.changeReview}>Edit
                                                </button>
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

export default EditReviewDB;