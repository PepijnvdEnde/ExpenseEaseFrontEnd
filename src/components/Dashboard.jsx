import { useEffect } from 'react'; //useState,
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import ManageExpenseModal from './ManageExpense';
import TotalExpenses from './Dashboard-Components/DBTotalExpenses';
import TotalIncome from './Dashboard-Components/DBTotalIncome';
import CategoryExpenses from './Dashboard-Components/DBCategoryExpenses';
import BugetOverview from './Dashboard-Components/DBBugetOverview';


const DashboardPage = () => {
    //const [dashboard, setDashboard] = useState('');
    // const [error, setError] = useState('');

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
                //const dashboardData = await response.text();
                //  setDashboard(dashboardData);
            } else {
                //  const errorMessage = await response.text();
                // setError(errorMessage);
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
                <div className="w-3/4 min-w-fit bg-white border-2 border-gray-300 rounded-lg p-5 grid grid-rows-2 h-min mb-3 shadow-lg">
                    <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20">
                        <p className="text-4xl text-blue-700">Dashboard of {localStorage.getItem('username')}</p>
                    </div>
                    <div className="flex justify-evenly items-center p-2 h-min">
                        <ManageExpenseModal />
                        <Link to="/" className="w-max h-min border-2 border-gray-300 rounded-lg flex justify-center items-center text-2xl p-3 button-3d shadow-md">Manage categories</Link>
                        <Link to="/" className="w-max h-min border-2 border-gray-300 rounded-lg flex justify-center items-center text-2xl p-3 button-3d shadow-md">Manage budgets</Link>
                        <Link to="/" className="w-max h-min border-2 border-gray-300 rounded-lg flex justify-center items-center text-2xl p-3 button-3d shadow-md">Manage income</Link>
                    </div>
                </div>
                <div className="w-3/4 p-3 flex justify-evenly items-center">
                    <TotalExpenses />

                    <TotalIncome />
                </div>
                <div className="w-3/4 p-3 mb-3 flex justify-evenly">

                    <CategoryExpenses />

                    <BugetOverview />

                </div>
            </div>
        </>
    );
}

export default DashboardPage;