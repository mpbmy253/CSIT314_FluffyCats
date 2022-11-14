import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import CCListofReview from "../Controller/CCListofReviews";


const ConferenceChairReviewsCompleteMain = () => {

    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <CCListofReview />
        </div>

    )
}

export default ConferenceChairReviewsCompleteMain; 