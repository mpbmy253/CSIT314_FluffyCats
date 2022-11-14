import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar"
import AcceptedPapersDB from "../Controller/ViewListOfAcceptedPapersDB";

const AcceptedPapers = () => {
    return (

        <div className="flex items-center justify-center w-full min-h-screen bg-gray-500">
            <AfterLoginNavbar />
            <div>
                <AcceptedPapersDB />
            </div>
        </div>

    )
}

export default AcceptedPapers; 