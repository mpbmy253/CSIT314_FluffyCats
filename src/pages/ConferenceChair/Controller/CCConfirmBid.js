import React, { useState } from "react";
import startFirebase from "../../../database/firebase_config";
import {getDatabase , ref, onValue , update } from "firebase/database";

//import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const db = startFirebase();

class CCConfirmBid extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
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

    confirmContent = (e) => {

        const db = getDatabase();
        const userRef = ref(db, "Papers/" + localStorage.getItem("Paper_Author") + "/"+ localStorage.getItem("Paper_Key"));

        update(userRef,{
            'ClaimedBy': localStorage.getItem("bidderName"),
            'IsClaimed': true
        })

        //localStorage.setItem("confirmDelete", "")
        //localStorage.setItem("bidderName", "")
        
    }

    resetContent = (e) => {
        localStorage.setItem("confirmDelete", "")
        localStorage.setItem("bidderName", "")
    }

    render() {
        console.log(localStorage.getItem("paperID"))
        return (
            <div className="container my-8 px-6">
                <h2 className="text-3xl font-bold mb-6 text-white mt-20">Confirm Bid</h2>

                <div className="container flex flex-col">
                    <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th className="text-sm font-medium text-white px-6 py-4">#</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Paper ID</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Paper Title</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Category</th>
                                            
                                            <th className="text-sm font-lg text-white px-6 py-4">Bidder</th>
                                            <th className="text-sm font-lg text-white px-6 py-4">Confirm?</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" border-black border-b-2">
                                        {this.state.tableData.map((row, index) => {
                                            if (row.paperData.Paper_ID == localStorage.getItem("paperID"))
                                                return (
                                                    <tr className="bg-white border-b-2 border-black hover:bg-gray-300">
                                                        {localStorage.setItem("Paper_Author", row.authorKey)}
                                                        {localStorage.setItem("Paper_Key", row.paperKey)}
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.paperData.Paper_ID}</td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.paperData.Paper_Title}</td>
                                                        
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.paperData.Category}</td>
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{localStorage.getItem("bidderName")}</td>
                                                        
                                                        <button
                                                            className="bg-teal-600 text-white my-3 px-6 py-2 rounded-lg hover:bg-teal-800 "
                                                            onClick={this.confirmContent}>
                                                            <Link to='/conferencechair-biddingmanagementmain'>
                                                                Yes
                                                            </Link>
                                                        </button>
                                                        
                                                        <button
                                                            className="bg-teal-600 text-white my-3 px-6 py-2 rounded-lg hover:bg-teal-800 "
                                                            onClick={this.resetContent}>
                                                            <Link to='/conferencechair-biddingmanagementmain'>
                                                                Back
                                                            </Link>
                                                        </button>
                                                    </tr>
                                                )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex">
                                            <button className="flex" onClick={this.resetContent}>
                                                <Link to={`/conferencechair-dashboard`}
                                                    className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Back to Main Page
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
export default CCConfirmBid;