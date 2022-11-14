import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar"
import SetWorkloadDB from "../Controller/SetWorkloadDB";

const SetWorkload = () => {
    return (

        <div className="flex items-center justify-center w-full min-h-screen bg-gray-500">
            <AfterLoginNavbar />
            <div>
                <SetWorkloadDB />
            </div>
        </div>
    )
}

export default SetWorkload; 