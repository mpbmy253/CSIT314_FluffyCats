import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import CCReviewContent from "../Controller/CCReviewedPaper";

const ConferenceChairReviewsCompleteRP = () => {

    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <CCReviewContent />
        </div>
    )
}

export default ConferenceChairReviewsCompleteRP; 