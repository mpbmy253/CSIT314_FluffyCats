import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import CCBiddingSelection from "../Controller/CCBiddingSelection";


const ConferenceChairBiddingManagementMain = () => {

    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <CCBiddingSelection />
        </div>

    )
}

export default ConferenceChairBiddingManagementMain; 