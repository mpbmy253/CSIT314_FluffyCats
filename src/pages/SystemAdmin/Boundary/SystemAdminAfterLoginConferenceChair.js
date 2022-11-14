import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import ToViewConferenceChairData from "../Controller/ToViewConferenceChairData";
import { useNavigate } from "react-router-dom";

const SystemAdminAfterLoginConferenceChair = () => {

    const navigate = useNavigate();

    // function to go Dashboard: side bar tab
    function goDashBoardTab() {
        navigate("/system-admin-dashboard") // Direct to SystemAdminAfterLoginDashboard.js
    }

    // Function to go allUser: side bar tab
    function goAllUserTab() {
        navigate("/all-users") // Direct to SystemAdminAfterLoginAllUsers.js
    }

    // function to go Author: side bar tab
    function goAuthorTab() {
        navigate("/authors") // Direct to SystemAdminAfterLoginAuthors.js
    }

    // function to go Reviewer: Side bar tab
    function goReviewerTab() {
        navigate("/reviewers") // Direct to SystemAdminAfterLoginReviewers.hs
    }

    // Function to go conference: side bar tab
    function goConferenceChairTab() {
        navigate("/conferencechair") // Direct to SystemAdminAfterLoginConferenceChair.js
    }

    // Function to logout
    function logout() {
        localStorage.removeItem("username")
        navigate("/") // Direct to LoginPageForAll.js
    }

    return (
        <div className="container">
            {/** TOP NAVBAR */}
            <AfterLoginNavbar />

            {/** SIDE BAR */}
            <div className="flex h-full fixed">
                <div className="flex mt-20 ">
                    {/** LEFT  SIDE */}
                    <div className="flex-initial">
                        <aside className="w-64" aria-label="Sidebar">
                            <div className="container overflow-y-auto py-4 px-3 bg-gray-800 h-screen">
                                <div className="flex flex-col items-center mt-6 -mx-2">
                                    <img className="object-cover w-24 h-24 mx-2 rounded-full"
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{localStorage.getItem("username")}</h4>
                                    <p className="mx-2 mt-1 text-sm font-medium text-gray-400 hover:underline">Role: System Admin</p>
                                </div>

                                <hr className="my-6 border-gray-600" />
                                <ul className="space-y-2">
                                    <li>
                                        <button onClick={goDashBoardTab} className="flex items-center p-2 pr-28  text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                            <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75  group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6 4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6 4h4v-4h-4M4 8h4V4H4v4z"></path>
                                            </svg>
                                            <span className="ml-3">Dashboard</span>
                                        </button>
                                    </li>

                                    <li>
                                        <button onClick={goAllUserTab} className="flex items-center p-2 pr-32 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6ZM6 11C7.32608 11 8.59785 11.5268 9.53553 12.4645C10.4732 13.4021 11 14.6739 11 16V17H1V16C1 14.6739 1.52678 13.4021 2.46447 12.4645C3.40215 11.5268 4.67392 11 6 11Z"></path>
                                                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M17 6C17 6.39397 16.9224 6.78407 16.7716 7.14805C16.6209 7.51203 16.3999 7.84274 16.1213 8.12132C15.8427 8.3999 15.512 8.62087 15.1481 8.77164C14.7841 8.9224 14.394 9 14 9C13.606 9 13.2159 8.9224 12.8519 8.77164C12.488 8.62087 12.1573 8.3999 11.8787 8.12132C11.6001 7.84274 11.3791 7.51203 11.2284 7.14805C11.0776 6.78407 11 6.39397 11 6C11 5.20435 11.3161 4.44129 11.8787 3.87868C12.4413 3.31607 13.2044 3 14 3C14.7956 3 15.5587 3.31607 16.1213 3.87868C16.6839 4.44129 17 5.20435 17 6ZM12.93 17.0001C12.976 16.6731 13 16.3401 13 16.0001C13.0023 14.429 12.4737 12.9031 11.5 11.6701C12.2601 11.2313 13.1223 11.0002 14 11.0002C14.8776 11.0002 15.7399 11.2313 16.4999 11.6701C17.26 12.1089 17.8912 12.7401 18.3301 13.5002C18.7689 14.2602 19 15.1224 19 16.0001V17.0001H12.93Z"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">All Users</span>
                                        </button>
                                    </li>

                                    <li>
                                        <button onClick={goAuthorTab} className="flex items-center p-2 pr-36 text-base font-normal text-white rounded-lg hover:bg-gray-700 ">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Author</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={goReviewerTab} className="flex items-center p-2 pr-32 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Reviewer</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={goConferenceChairTab} className="flex items-center p-2 pr-16 text-base font-normal text-gray-900 rounded-lg bg-gray-100">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Conference Chair</span>
                                        </button>
                                    </li>

                                    {/** 
                                    <li>
                                        <a href="/system-admin-settings" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"                                         
                                            fill="currentColor" 
                                            viewBox="0 0 20 20" 
                                            xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                                        </a>
                                    </li>
                                    */}

                                    <li>
                                        <button onClick={logout} className="flex items-center p-2 pr-32 text-base font-normal text-white rounded-lg hover:bg-gray-700">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        </aside>
                    </div>
                    {/** RIGHT SIDE */}
                    {/** RIGHT SIDE */}
                    <section className="bg-gray-500 w-screen">
                        <div className="w-full h-full ">
                            <div className="container mx-2">
                                <div className="w-full max-w-full p-2 mx-auto">
                                    <div className="flex flex-wrap -mx-3">
                                        <ToViewConferenceChairData></ToViewConferenceChairData>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default SystemAdminAfterLoginConferenceChair