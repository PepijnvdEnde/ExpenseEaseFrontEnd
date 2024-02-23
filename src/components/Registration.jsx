import { Component } from "react";
import { Link } from "react-router-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    sendRegistration = async (username, password) => {
        let data = {
            username: username,
            password: password,
        };
        const response = await fetch("http://localhost:8080/Register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        return response;
    };

    handleRegistration = async () => {
        if (this.state.username === "" || this.state.password === "") {
            alert("Username or Password cannot be empty");
            return;
        }

        let response = await this.sendRegistration(this.state.username, this.state.password);

        if (response.ok) {
            window.location.href = "/Dashboard";
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
            alert(errorMessage);
        }
    };


    handleUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                this.handleRegistration();
            }
        };

        return (
            <div className="w-screen min-h-screen bg-gray-600 flex justify-center items-center">
                <div className="w-1/2 bg-indigo-600 rounded-lg p-10">
                    <Link to="/Login" className="text-white text-xl">
                        &larr; Back to Login
                    </Link>
                    <h1 className="text-4xl text-center text-white mb-4">Register</h1>
                    <div className="grid grid-cols-1 gap-y-4">

                        <div>
                            <label className="text-white  mb-2" htmlFor="username">Username</label>
                            <input
                                id="username"
                                className="rounded-md w-full p-2"
                                type="text"
                                placeholder="Enter your username"
                                onChange={this.handleUsername}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        <div>
                            <label className="text-white  mb-2" htmlFor="password">Password</label>
                            <input
                                id="password"
                                className="rounded-md w-full p-2"
                                placeholder="Enter your password"
                                type="password"
                                onChange={this.handlePassword}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        <div>
                            <button
                                className="bg-blue-500 rounded-md text-white w-full p-2"
                                type="button"
                                onClick={this.handleRegistration}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;