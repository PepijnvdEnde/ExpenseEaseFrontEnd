import { Component } from "react";
import Navbar from './navbar.jsx';

class ManageExpensesPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="w-screen min-h-screen bg-gray-600 flex justify-center pt-2">
                    <div className="w-3/4 bg-indigo-600 rounded-lg pl-10 pt-10 ">
                        <h1 className="text-4xl text-left text-white  text-center">Manage Expenses</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default ManageExpensesPage;
