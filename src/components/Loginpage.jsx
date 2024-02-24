import { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }
    

    getLogin = async (username, password) => {
        let data = {
            username: username,
            password: password,
        };
        const response = await fetch("http://localhost:8080/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        return response;
    };

    handleLogin = async () => {
        if (this.state.username === "" || this.state.password === "") {
            alert("Username or Password cannot be empty");
            return;
        }

        let response = await this.getLogin(this.state.username, this.state.password);

        if (response.ok) {
            const JwtToken = await response.text();
            localStorage.setItem('jwtToken', JwtToken);
            localStorage.setItem('username', this.state.username);
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
                this.handleLogin();
            }
        };

        return (
            <div className="w-screen min-h-screen bg-gray-600 flex justify-center items-center">
                <div className="w-1/2 bg-indigo-600 rounded-lg p-10">
                    <h1 className="text-4xl text-center text-white mb-4">Login</h1>
                    <div className="grid grid-cols-1 gap-y-4">
                        <div>
                            <label className="text-white block mb-2" htmlFor="username">Username</label>
                            <input
                                id="username"
                                className=" w-full p-2"
                                placeholder="Username"
                                type="text"
                                onChange={this.handleUsername}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        <div>
                            <label className="text-white block mb-2" htmlFor="password">Password</label>
                            <input
                                id="password"
                                className=" w-full p-2"
                                placeholder="Password"
                                type="password"
                                onChange={this.handlePassword}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                        <div>
                            <button
                                className="bg-blue-500  text-white w-full p-2"
                                type="button"
                                onClick={this.handleLogin}
                            >
                                Login
                            </button>
                        </div>
                        <div className="text-center text-white">
                            Don't have an account? <Link to="/Register">Register new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default LoginPage;
