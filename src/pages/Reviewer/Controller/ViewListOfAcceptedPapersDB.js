import React, { useState } from "react";
import startFirebase from "../../../database/firebase_config";
import { getDatabase, ref, onValue, set } from "firebase/database";

//import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const db = startFirebase();

class AcceptedPapersDB extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
            bidData: []
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

                    records.push({ "authorKey": authorKey, "paperKey": paperKey, "paperData": paperData, })
                });
            });
            this.setState({ tableData: records });
        });
    }

    checkContent = (e) => {
        console.log(e.currentTarget.id);

        this.state.tableData.map((row, index) => {
            if (e.currentTarget.id == (index + 1)) {
                localStorage.setItem("Paper_Author", row.authorKey)
                localStorage.setItem("Paper_ID", row.paperKey)
                localStorage.setItem("Paper_Title", row.paperData.Paper_Title)
            }
            else {
                console.log("Failed")
            }
        })
    }

    render() {
        console.log(this.state.tableData)
        return (
            <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 ">
                <div className="container my-8 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-white mt-20">Accepted Review</h2>
                    <div className="container flex flex-col">
                        <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
                            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                                    <table className="min-w-full text-center">
                                        <thead className="border-b bg-gray-800">
                                            <tr>
                                                <th className="text-sm font-medium text-white px-6 py-4">No</th>
                                                <th className="text-sm font-lg text-white px-6 py-4">Authors</th>
                                                <th className="text-sm font-lg text-white px-6 py-4">Paper Title</th>
                                                <th className="text-sm font-lg text-white px-6 py-4">Category</th>
                                                <th className="text-sm font-lg text-white px-6 py-4">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className=" border-black border-b-2">
                                            {this.state.tableData.map((row, index) => {
                                                if (row.paperData.ClaimedBy == localStorage.getItem("username"))
                                                    return (
                                                        <tr className="bg-white border-b-2 border-black hover:bg-gray-300">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.authorKey}</td>
                                                            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.paperData.Paper_Title}</td>
                                                            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.paperData.Category}</td>
                                                            <button id={index + 1}
                                                                className="bg-teal-600 text-white my-3 px-6 py-2 rounded-lg hover:bg-teal-800 "
                                                                onClick={this.checkContent}>
                                                                <Link to='/reviewer-dashboard/acceptedPapers/review'>
                                                                    Review
                                                                </Link>
                                                            </button>
                                                        </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AcceptedPapersDB;