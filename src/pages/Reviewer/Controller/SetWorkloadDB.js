import React from "react";
import startFirebase from "../../../database/firebase_config";
import { getDatabase, ref, onValue, push, update } from "firebase/database";

const db = startFirebase();

class SetWorkloadDB extends React.Component {
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
                if (data.username == localStorage.getItem("username")) {
                    records.push({ "key": keyName, "data": data });
                }
            });
            this.setState({ tableData: records });
        });
    }

    handleChange = (e) => {
        localStorage.setItem("workload", e.target.value)
    };

    // Function to changeAllocation
    changeAllocation = (e) => {
        console.log(localStorage.getItem("workload"));
        const db = getDatabase();
        const userRef = ref(db, "UsersList/" + localStorage.getItem("username"));

        update(userRef, {
            'workload': localStorage.getItem("workload")
        })
    }

    render() {
        return (
            <div className="flex items-left justify-center w-screen min-h-screen bg-gradient-to-b from-black via-black ">
                <div className="container my-8 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-white mt-20">Allocating Time Boys</h2>
                    <div className="container flex flex-col">
                        <div className="overflow-x-auto  sm:-mx-6 items-center lg:-mx-8">
                            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                                    <table className="min-w-full text-center">
                                        <thead className="border-b bg-gray-800">
                                            <tr>
                                                <th className="text-sm font-medium text-white px-6 py-4">Workload</th>
                                                <th className="text-sm font-lg text-white px-6 py-4">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className=" border-black border-b-2">
                                            {this.state.tableData.map((row, index) => {
                                                return (
                                                    <tr className="bg-white border-b-2 border-black hover:bg-gray-300">
                                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">{row.data.workload}</td>
                                                        <input
                                                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                            id="grid-text-1"
                                                            onChange={this.handleChange}
                                                        ></input>
                                                        <button className="bg-blue-600 text-white mx-2 px-6 py-2 rounded-lg hover:bg-blue-800"
                                                            onClick={this.changeAllocation}
                                                        >Edit
                                                        </button>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SetWorkloadDB;