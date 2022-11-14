import React from "react";
import startFirebase from "./firebase_config";
import { ref, onValue } from "firebase/database";
import AfterLoginNavbar from "../components/NavBar/AfterLoginNavbar";
import { Link } from "react-router-dom";


const db = startFirebase();

class ViewPaperContent extends React.Component {
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
            <div className="flex items-left justify-center w-screen min-h-screen bg-gradient-to-b from-black via-black text-white ">
                <AfterLoginNavbar />
                <div className="container my-8 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-white mt-20">View Paper Details</h2>
                    <form action="">
                        {this.state.tableData.map((row, index) => {
                            if (row.paperData.Paper_Title == localStorage.getItem("Paper_Title"))
                                return (
                                    <div className="mt-4">
                                        <div className="mt-4">
                                            <label className="block text-black-700 text-base font-bold" for="Username">Paper Title</label>
                                            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                type="text" value={row.paperData.Paper_Title} disabled
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-black-700 text-base font-bold" for="Username">Paper Category</label>
                                            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                type="text" value={row.paperData.Category} disabled />
                                        </div>

                                        <div className="mt-4 relative">
                                            <label className="block text-black-700 text-base font-bold" for="Username">Paper Content</label>
                                            <textarea className="h-25 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 h-96"
                                                type="text" value={row.paperData.Paper_Content} disabled />
                                        </div>

                                        <div className="flex">
                                            <Link to={`/reviewer-dashboard/bidPapers`}
                                                className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Back
                                            </Link>
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

export default ViewPaperContent;