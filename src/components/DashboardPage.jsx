import { Component } from "react";
import Navbar from './navbar.jsx';

class DashboardPage extends Component {
    state = {
        dashboard: null,
        error: null
    };

    componentDidMount() {
        this.fetchDashboard();
    }

    fetchDashboard = async () => {
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
                const dashboard = await response.text();
                this.setState({ dashboard, error: null });
            } else {
                const errorMessage = await response.text();
                this.setState({ error: errorMessage });
            }
        } catch (error) {
            this.setState({ error: "An error occurred while fetching the dashboard." });
        }
    };

    render() {
        const { dashboard, error } = this.state;

        return (
            <>
                <Navbar />
                <div className="w-screen min-h-screen bg-gray-600 flex justify-center pt-2">
                    <div className="w-3/4 bg-indigo-600 rounded-lg pl-10 pt-10 ">
                        <h1 className="text-4xl text-left text-white  text-center">Dashboard</h1>
                        {error && <h2 className="text-left text-white mb-4">{error}</h2>}
                        {dashboard && <h2 className="text-left text-white mb-4">{dashboard}</h2>}
                    </div>
                </div>
            </>
        );
    }
}

export default DashboardPage;
