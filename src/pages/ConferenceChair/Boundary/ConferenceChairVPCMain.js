import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import CCViewPaper from "../Controller/CCViewListofPaper";

const ConferenceChairVPCMain = () => {

    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <CCViewPaper />
        </div>

    )
}

export default ConferenceChairVPCMain; 