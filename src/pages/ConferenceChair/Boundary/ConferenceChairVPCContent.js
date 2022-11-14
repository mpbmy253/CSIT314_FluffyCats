import React from "react";

import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar";
import CCPaperContent from "../Controller/CCViewPaperContent";

const ConferenceChairVPCContent = () => {
    return (
        <div className="flex items-left justify-center w-screen min-h-screen bg-gray-500 text-white">
            <AfterLoginNavbar />
            <CCPaperContent />
        </div>

    )
}

export default ConferenceChairVPCContent; 