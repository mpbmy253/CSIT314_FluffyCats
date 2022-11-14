import React from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";

const AuthorAfterLoginDashboard = () => {
    const navigate = useNavigate()

    // Fucntion toSearchPapers
    function toSearchPapers() {
        navigate("/author-searchpaper") // Direct to AuthorSearchPaper.js
    }

    // Function toAddPapers
    function toAddPapers() {
        navigate("/author-addpaper") // Direct to AuthorAddPaper.js
    }

    // function toViewPapers
    function toViewPapers() {
        navigate("/author-viewpaper") // Direct to AuthorViewPaper.js
    }

    return (
        <div className="container">
            <AfterLoginNavbar />
            <div className="flex items-left justify-center w-screen min-h-screen bg-gray-900">
                <div className="container my-36 px-6">
                    <section className=" text-gray-800 text-center justify-center">
                        <h2 className="text-3xl font-bold mb-6 text-white">Author Dashboard</h2>

                        <div className="items-left justify-left grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                            <div className="mb-6 lg:mb-0">
                                <div className="bg-white block rounded-lg shadow-lg">
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="text-lg font-bold mb-4">
                                            <button onClick={toSearchPapers} >Search Papers</button>
                                        </h5>
                                        <p className="text-gray-500 mb-2"></p>
                                        <p className="text-gray-500 mb-4"></p>
                                        <ul className="list-inside flex mx-auto justify-center">
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 lg:mb-0">
                                <div className="bg-white block rounded-lg shadow-lg">
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="text-lg font-bold mb-4">
                                            <button onClick={toAddPapers}>Add Papers</button>
                                        </h5>
                                        <p className="text-gray-500 mb-2"></p>
                                        <p className="text-gray-500 mb-4"></p>
                                        <ul className="list-inside flex mx-auto justify-center">
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 lg:mb-0">
                                <div className="bg-white block rounded-lg shadow-lg">
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="text-lg font-bold mb-4">
                                            <button onClick={toViewPapers}>View Papers</button>
                                        </h5>
                                        <p className="text-gray-500 mb-2"></p>
                                        <p className="text-gray-500 mb-4"></p>
                                        <ul className="list-inside flex mx-auto justify-center">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AuthorAfterLoginDashboard