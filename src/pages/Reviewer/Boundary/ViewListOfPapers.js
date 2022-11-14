import React from "react";
import AfterLoginNavbar from "../../../components/NavBar/AfterLoginNavbar"
import ReviewerViewPaper from "../Controller/ViewListOfPapersDB";

const Bid = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-500">
            <AfterLoginNavbar />
            <div>
                <ReviewerViewPaper />
            </div>
        </div>

    )
}
export default Bid; 