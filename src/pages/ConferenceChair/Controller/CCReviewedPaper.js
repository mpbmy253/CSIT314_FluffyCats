import React from "react";
import startFirebase from "../../../database/firebase_config";
import {ref, onValue} from "firebase/database";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import { Link } from "react-router-dom";

//import { Table } from "react-bootstrap";
/*
    let navigate = useNavigate();
    function reviewerViewPaper() {
        navigate('/reviewer-dashboard/bidPapers')
    }
*/

const db = startFirebase();

class CCReviewContent extends React.Component {
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
        return(
            
            <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
                <AfterLoginNavbar/>
                <div className="container my-8 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-white mt-20">Paper's Review</h2>
                    <form action="">
                        {this.state.tableData.map((row, index) => {
                            if (row.paperData.Paper_Title == localStorage.getItem("Paper_Title"))
                                return (
                                    <div className="mt-4">
                                        <div className="mt-4 relative">
                                            <label className="block text-black-700 text-base font-bold">Paper Title</label>
                                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                type="text" value={row.paperData.Paper_Title} disabled
                                            />
                                        </div>
                                        <div className="mt-4">

                                            <label className="block text-black-700 text-base font-bold">Paper Content</label>
                                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                type="text" value={row.paperData.Paper_Content} disabled
                                            />
                                        </div>
                                        <div className="mt-4 relative">
                                            <label className="block text-black-700 text-base font-bold" for="Username">Paper Review</label>
                                            <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 h-96"
                                                type="text" value={row.paperData.Paper_Content} disabled />
                                        </div>

                                        <div className="flex">
                                            <div className="flex">
                                                <Link to={`/conferencechair-reviewscompletemain`}
                                                    className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Back
                                                </Link> 
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="flex">
                                                <Link to={`/conferencechair-dashboard`}
                                                    className="w-50 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Back to Main Page
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
export default CCReviewContent;