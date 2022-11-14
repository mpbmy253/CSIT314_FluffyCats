import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/fluffycates_logo.jpg"


const AfterLoginNavbar = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate()

    // Function to logout
    function logout(){
        localStorage.removeItem("username")
        setIsLoggedin(false);
        navigate("/")
    }

    return (
        <nav className="px-2 py-3.5 bg-blue-900 fixed w-full z-20 top-0 left-0 border-b border-sky-600">
            <div className="flex justify-between items-center mx-auto max-w-7xl px-8">
                <div>
                    <div className="flex items-center justify-between py-3 ">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="mr-3 h-6" alt="Fluffy Cat Logo"></img>
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Fluffy Cat</span>
                        </a>
                    </div>
                </div>

                <div className="ml-40">
                    <a className="text-xl px-4 py-2 whitespace-nowrap text-white">Welcome {localStorage.getItem("username")}</a>
                </div>
                
                <div className="space-x-2 inline-block">
                    <button
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        onClick={logout}
                    >Logout
                    </button>

                </div>
            </div>
        </nav>
    )
}
export default AfterLoginNavbar