import React from "react";
import startFirebase from "../../../database/firebase_config";

import {
    ref,
    onValue,
} from "firebase/database";
import { Link } from "react-router-dom";


const db = startFirebase();


class ToViewConferenceChairData extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'UsersList');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                if (data.role == "Conference Chair") {
                    records.push({ "key": keyName, "data": data });
                }
            });
            this.setState({ tableData: records });
        });
    }

    render() {
        return (
            <div className="container flex flex-col ml-3">
                <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th className="text-sm font-medium text-white px-6 py-4">No</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">First Name</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Last Name</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Username</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Email</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Roles</th>
                                        <th className="text-sm font-lg text-white px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody className=" border-black border-b-2">
                                    {
                                        this.state.tableData.map((row, index) => {
                                            return (
                                                <tr key={index}
                                                    className="bg-white border-b-2 border-black hover:bg-gray-300"
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.data.firstname}</td>
                                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.data.lastname}</td>
                                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.key}</td>
                                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.data.email}</td>
                                                    <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.data.role}</td>
                                                    <td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-2 space-x-4 whitespace-nowrap"></td>
                                                    <Link
                                                        to={`/all-users/view/${row.key}`}
                                                        className="bg-teal-600 text-white mx-2 px-6 py-2 rounded-lg hover:bg-teal-800">View
                                                    </Link>

                                                    <Link
                                                        to={`/all-users/update/${row.key}`}
                                                        className="bg-blue-600 text-white mx-2 px-6 py-2 rounded-lg hover:bg-blue-800">Edit/Update
                                                    </Link>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ToViewConferenceChairData;
