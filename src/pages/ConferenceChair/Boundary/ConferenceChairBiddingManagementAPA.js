import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import CCConfirmBid from "../Controller/CCConfirmBid";

const ConferenceChairBiddingManagementAPA = () => {

    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <CCConfirmBid />
        </div>

    )
}

export default ConferenceChairBiddingManagementAPA; 