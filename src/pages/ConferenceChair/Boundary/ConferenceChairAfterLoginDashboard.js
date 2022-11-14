import React from "react";
import { useNavigate } from "react-router-dom";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";

const ConferenceChairAfterLoginDashboard = () => {
    const navigate = useNavigate()

    // Function toBidMain
    function toBidMain() {
        navigate("/conferencechair-biddingmanagementmain") // Direct to ConferenceChairBiddingManagementMain.js
    }

    // Function toViewSubmittedPaperContent
    function toViewSubmittedPaperContent() {
        navigate("/conferencechair-vpcmain") // Direct to ConferenceChairVPCMain.js
    }

    // Function toViewAllSubmittedPaper
    function toViewAllSubmittedPaper() {
        navigate("/conferencechair-reviewscompletemain") // Direct to ConferenceChairReviewsCompleteMain.js
    }

    return (
        <div className="container">
            <AfterLoginNavbar />
            <div className="flex items-left justify-center w-screen min-h-screen bg-gray-900">
                <div className="container my-36 px-6">
                    <section className=" text-gray-800 text-center justify-center">
                        <h2 className="text-3xl font-bold mb-6 text-white">Hello Conference Chair, what would you like to do today?</h2>

                        <div className="items-left justify-left grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                            <div className="mb-6 lg:mb-0">
                                <div className="bg-white block rounded-lg shadow-lg">
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </div>
                                    <div className="p-6">
                                        <h5 class="text-lg font-bold mb-4">Allocating Papers [To Reviewers]</h5>
                                        <button onClick={toBidMain}>Bidding Management</button>
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
                                        <h5 class="text-lg font-bold mb-4">View All Papers</h5>
                                        <button onClick={toViewSubmittedPaperContent}>View all Submitted Papers Contents</button>
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
                                        <h5 class="text-lg font-bold mb-4">View Paper's Completed Reviews</h5>
                                        <button onClick={toViewAllSubmittedPaper}>View all Submitted Reviews</button>
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

export default ConferenceChairAfterLoginDashboard;