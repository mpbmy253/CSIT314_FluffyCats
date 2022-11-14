import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";

// Login Page for All
import LoginPageForAll from "./pages/LoginIn/LoginPageForAll";

// Import for System Admin Perspective
import SystemAdminAfterLoginAllUsers from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginAllUsers";
import SystemAdminAfterLoginAuthors from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginAuthors";
import SystemAdminAfterLoginConferenceChair from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginConferenceChair";
import SystemAdminAfterLoginDashboard from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginDashboard";
import SystemAdminAfterLoginReviewers from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginReviewers";
import SystemAdminAfterLoginAllUsersCreateNewUserAccount from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginAllUsersCreateNewUserAccount";
import SystemAdminAfterLoginAllUsersViewIndividualUser from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginAllUsersViewIndividualUser";
import SystemAdminAfterLoginAllUsersUpdatelUser from "./pages/SystemAdmin/Boundary/SystemAdminAfterLoginAllUsersUpdateIndividualUser";

// Import for Author Perspective
import AuthorAfterLoginDashboard from "./pages/Author/Boundary/AuthorAfterLoginDashboard";
import AuthorSearchPaper from "./pages/Author/Boundary/AuthorSearchPaper";
import AuthorAddPaper from "./pages/Author/Boundary/AuthorAddPaper";
import AuthorViewPaper from "./pages/Author/Boundary/AuthorViewPaper";
import AuthorViewPaperDetails from "./pages/Author/Boundary/AuthorViewPaperDetails";
import AuthorEditPaperDetails from "./pages/Author/Boundary/AuthorEditPaperDetails";

// Import for Reviewer Perspective
import ReviewerAfterLoginDashboard from "./pages/Reviewer/Boundary/ReviewerAfterLoginDashboard";
import SetWorkload from "./pages/Reviewer/Boundary/SetWorkload";
import AcceptedPapers from "./pages/Reviewer/Boundary/ViewListOfAcceptedPapers";
import Bid from "./pages/Reviewer/Boundary/ViewListOfPapers";
import ViewPaperContent from "./pages/Reviewer/Controller/ViewPaperContentDB";
import ViewReviewDB from "./pages/Reviewer/Controller/ViewReviewDB";
import EditReviewDB from "./pages/Reviewer/Controller/EditReviewDB";

// Imprt for Conference Chair Perspective
import ConferenceChairAfterLoginDashboard from "./pages/ConferenceChair/Boundary/ConferenceChairAfterLoginDashboard";
import ConferenceChairBiddingManagementMain from "./pages/ConferenceChair/Boundary/ConferenceChairBiddingManagementMain";
import ConferenceChairBiddingManagementAPA from "./pages/ConferenceChair/Boundary/ConferenceChairBiddingManagementAPA";
import ConferenceChairVPCMain from "./pages/ConferenceChair/Boundary/ConferenceChairVPCMain";
import ConferenceChairVPCContent from "./pages/ConferenceChair/Boundary/ConferenceChairVPCContent";
import ConferenceChairReviewsCompleteMain from "./pages/ConferenceChair/Boundary/ConferenceChairReviewsCompleteMain";
import ConferenceChairReviewsCompleteRP from "./pages/ConferenceChair/Boundary/ConferenceChairReviewsCompleteRP";

function App() {
    return (
        <Router> 
            <div>
                <Switch>
                    {/** LOGIN  */}
                    <Route path="/" element={<LoginPageForAll/>}/>

                    {/** SYSTEM ADMIN */}
                    <Route path="/system-admin-dashboard" element={<SystemAdminAfterLoginDashboard/>}/>
                    <Route path="/all-users" element={<SystemAdminAfterLoginAllUsers/>}/>
                    <Route path="/new-user-account" element={<SystemAdminAfterLoginAllUsersCreateNewUserAccount/>}/>
                    <Route path="/all-users/view/:username" element={<SystemAdminAfterLoginAllUsersViewIndividualUser/>}/>
                    <Route path="/all-users/update/:username" element={<SystemAdminAfterLoginAllUsersUpdatelUser/>}/>
                    <Route path="/authors" element={<SystemAdminAfterLoginAuthors/>}/>
                    <Route path="/reviewers" element={<SystemAdminAfterLoginReviewers/>}/>
                    <Route path="/conferencechair" element={<SystemAdminAfterLoginConferenceChair/>}/>
                    
                    {/** AUTHOR */}
                    <Route path="/author-dashboard" element={<AuthorAfterLoginDashboard />} />
                    <Route path="/author-searchpaper" element={<AuthorSearchPaper />} />
                    <Route path="/author-addpaper" element={<AuthorAddPaper />} />
                    <Route path="/author-viewpaper" element={<AuthorViewPaper />} />
                    <Route path="/author-viewpaperdetails/:paperId" element={<AuthorViewPaperDetails />} />
                    <Route path="/author-editpaperdetails/:paperId" element={<AuthorEditPaperDetails />} />
                    
                    {/** REVIEWER */}
                    <Route path="/reviewer-dashboard" element={<ReviewerAfterLoginDashboard/>}/>
                    <Route path="/reviewer-dashboard/bidPapers" element={<Bid />}/>
                    <Route path="/reviewer-dashboard/bidPapers/viewContent" element={<ViewPaperContent/>}/>
                    <Route path="/reviewer-dashboard/setWorkload" element={<SetWorkload />}/>
                    <Route path="/reviewer-dashboard/acceptedPapers" element={<AcceptedPapers />}/>
                    <Route path="/reviewer-dashboard/acceptedPapers/review" element={<ViewReviewDB />}/>
                    <Route path="/reviewer-dashboard/acceptedPapers/review/editReview" element={<EditReviewDB />}/>
                    
                    {/** CONFERENCE CHAIR*/}
                    <Route path="/conferencechair-dashboard" element={<ConferenceChairAfterLoginDashboard/>}/>
                    <Route path="/conferencechair-biddingmanagementmain" element={<ConferenceChairBiddingManagementMain/>}/>
                    <Route path="/conferencechair-biddingmanagementapa" element={<ConferenceChairBiddingManagementAPA/>}/>
                    <Route path="/conferencechair-vpcmain" element={<ConferenceChairVPCMain/>}/>
                    <Route path="/conferencechair-vpccontent" element={<ConferenceChairVPCContent/>}/>
                    <Route path="/conferencechair-reviewscompletemain" element={<ConferenceChairReviewsCompleteMain/>}/>
                    <Route path="/conferencechair-reviewscompleterp" element={<ConferenceChairReviewsCompleteRP/>}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;