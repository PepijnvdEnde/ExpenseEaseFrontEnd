import { Component } from "react";

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
        console.log(JSON.stringify(data));
        await fetch("http://localhost:8080/Login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    };

    handleLogin = async () => {
        const response = await this.getLogin(this.state.username, this.state.password).catch((error) => {
            console.error("Error:", error);
        });

        if (response && response.status === 200) {
            window.location.href = "/Dashboard";
        } else {
            console.log("Login failed");
        }
    };
       

    handleUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="w-screen min-h-screen bg-gray-600 flex justify-center pt-2">
                <div className="w-3/4 bg-indigo-600 rounded-lg pl-10 pt-10 flex justify-center grid content-center">
                    <div className=" border-2 p-2 rounded-lg border-blue-500">
                        <h1 className="text-4xl text-left text-white ">Login</h1>
                        <label className="text-white" >Username</label><br />
                        <input className="rounded-md w-72 p-1" type="text" onChange={this.handleUsername} /><br />
                        <label className="text-white">Password</label><br />
                        <input className="rounded-md w-72 p-1" type="password" onChange={this.handlePassword} /><br />
                        <button className="bg-blue-500 rounded-md text-white w-72 mt-3" type="button" onClick={this.handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
