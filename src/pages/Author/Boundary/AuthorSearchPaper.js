import React from "react";
import { useNavigate } from 'react-router-dom';
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";

const AuthorSearchPaper = () => {

    const navigate = useNavigate();

    function editpaperdetails() {
        navigate('/author-editpaperdetails') // Direct to AuthorEditPaperDetails.js
    }

    function viewpaperdetails() {
        navigate('/author-viewpaperdetails') // Direct to AuthorViewPaperDetails.js
    }

    function backtoauthorhome() {
        navigate('/author-dashboard') // Direct to AuthorAfterLoginDashboard.js
    }

    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <div className="container my-8 px-6">
                <h2 className="text-3xl font-bold mb-6 text-white mt-20">Search Papers</h2>

                {/* Title Search Input Text  */}
                <div className="mt-4">
                    <label
                        className="block text-black-700 text-base font-bold"
                        for="Username"
                    >Paper Title</label>
                    <input
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black"
                        type="text"
                    />
                </div>

                <div className="flex">
                    <button className="w-30 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    >Search</button>
                    <button
                        className="w-30 px-6 py-2 mt-4 ml-5 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    >Clear</button>
                    <button className="w-50 px-6 py-2 mt-4 ml-5 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                        onClick={backtoauthorhome} >Back to Home
                    </button>
                </div>

                <div className="container flex flex-col">
                    <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                                {/* <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                    <th className="text-sm font-medium text-white px-6 py-4">Paper ID</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Paper Title</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Paper Category</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Authors</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Published Date</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Review Status</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody className=" border-black border-b-2">
                                    <tr className="bg-white border-b-2 border-black hover:bg-gray-300">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">Life of a President</td>
                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">Biographies</td>
                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">Liam, Sam</td>
                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">20 May 2020</td>
                                        <td className="textsm1 text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">Good</td>
                                        <td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-2 space-x-4 whitespace-nowrap"></td>
                                        <button
                                            onClick={viewpaperdetails}
                                            className="bg-teal-600 text-white mx-2 mb-3 px-6 py-2 rounded-lg hover:bg-teal-800">View
                                        </button>                    
                                        <button      
                                            onClick={editpaperdetails}
                                            className="bg-blue-600 text-white mx-2 px-6 py-2 rounded-lg hover:bg-blue-800">Edit
                                        </button>
                                       
                                    </tr>
                                </tbody>
                            </table> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AuthorSearchPaper; 