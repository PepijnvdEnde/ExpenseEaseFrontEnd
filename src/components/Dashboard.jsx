import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const DashboardPage = () => {
    const [dashboard, setDashboard] = useState('');
    const [error, setError] = useState('');

    const fetchDashboard = async () => {
        try {
            let token = localStorage.getItem('jwtToken');
            const response = await fetch("http://localhost:8080/Dashboard", {
                method: "GET",
                headers: {
                    "Authorization": `${JSON.parse(token).token}`,
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                const dashboardData = await response.text();
                setDashboard(dashboardData);
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center w-screen min-h-screen bg-white pt-2">
                <div className="w-3/4 min-w-fit bg-white border-2 border-black p-5 grid grid-rows-2 h-min mb-3">
                    <div className="flex justify-center items-center border-2 border-blue-700 h-20">
                        <p className="text-4xl text-blue-700">Dashboard of {localStorage.getItem('username')}</p>
                    </div>
                    <div className="flex justify-evenly items-center p-2 h-min">
                        <Link  to="/AddExpense" className="w-max h-min border-2 border-black flex justify-center items-center text-2xl p-3 button-3d">Add Expence</Link>
                        <Link to="/ManageExpenses" className="w-max h-min border-2 border-black flex justify-center items-center text-2xl p-3 button-3d">Remove Expence</Link>
                    </div>
                </div>
                <div className="w-3/4 flex flex-col justify-center items-center border-2 border-black h-min p-3">
                    <div className="text-4xl border-b-2 border-black w-full text-center pb-3">History</div>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                    <p className="text-4xl"> Amount: 300.00, Date: 2021-09-01,Description: Food</p>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;