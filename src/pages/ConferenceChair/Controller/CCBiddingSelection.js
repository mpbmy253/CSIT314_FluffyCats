import React, { useState } from "react";
import startFirebase from "../../../database/firebase_config";
import { getDatabase , ref, onValue, remove } from "firebase/database";

//import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const db = startFirebase();

class CCBiddingSelection extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
            bidData: []
        }
    }
    componentDidMount() {
        const dbRef = ref(db, 'Bids');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(paperSnapshot => {
                let paperKey = paperSnapshot.key;

                snapshot.child(paperSnapshot.key).forEach((bidderSnapshot) => {
                    let bidderKey = bidderSnapshot.key;
                    let bidderData = bidderSnapshot.val();

                    records.push({ "paperKey": paperKey, "bidderKey": bidderKey, "bidderData": bidderData, })
                });
            });
            this.setState({ tableData: records });

            if (localStorage.getItem("confirmDelete") != "")
            {
                
                const db = getDatabase();
                const deleteRef = ref(db, "Bids/" + localStorage.getItem("confirmDelete"));
                remove(deleteRef)

                localStorage.setItem("confirmDelete", "")
                localStorage.setItem("bidderName", "")
            }
        });
    }



    checkContent = (e) => {
        console.log(e.currentTarget.id);

        this.state.tableData.map((row, index) => {
            if (e.currentTarget.id == (index + 1)) {
                localStorage.setItem("paperID", row.paperKey)
                localStorage.setItem("confirmDelete", row.paperKey)
                localStorage.setItem("bidderName", row.bidderKey)
            }
            else {
                console.log("Failed")
            }
        })
    }

    render() {
        console.log(this.state.tableData)
        return (
            <div className="container my-8 px-6">
                <h2 className="text-3xl font-bold mb-6 text-white mt-20">PAPER ALLOCATION</h2>

                <div className="container flex flex-col">
                    <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th className="text-sm font-medium text-white px-6 py-4">#</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Paper ID</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Bidder</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Allocate</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" border-black border-b-2">
                                        {this.state.tableData.map((row, index) => {
                                                return (
                                                    <tr className="bg-white border-b-2 border-black hover:bg-gray-300">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.paperKey}</td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.bidderKey}</td>
                                                        <button id={index + 1}
                                                            className="bg-teal-600 text-white my-3 px-6 py-2 rounded-lg hover:bg-teal-800 "
                                                            onClick={this.checkContent}>
                                                            <Link to='/conferencechair-biddingmanagementapa'>
                                                                Review
                                                            </Link>
                                                        </button>
                                                    </tr>
                                                )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex">
                                <button className="flex"
                                    onClick = {localStorage.setItem("confirmDelete", "")}>
                                        <Link to={`/conferencechair-dashboard`}
                                            className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Back
                                        </Link> 
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CCBiddingSelection;