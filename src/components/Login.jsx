import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getLogin = async (username, password) => {
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

    const handleLogin = async () => {
        if (username === "" || password === "") {
            alert("Username or Password cannot be empty");
            return;
        }

        let response = await getLogin(username, password);

        if (response.ok) {
            const JwtToken = await response.text();
            localStorage.setItem('jwtToken', JwtToken);
            localStorage.setItem('username', username);
            window.location.href = "/Dashboard";
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
            alert(errorMessage);
        }
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <div className="w-screen min-h-screen bg-white flex justify-center items-center" onKeyDown={handleKeyPress}>
            <div className="w-1/3 bg-white border-2 border-gray-300 rounded-lg p-10">
                <h1 className="text-4xl text-center text-black mb-4">Login</h1>
                <div className="grid grid-cols-1 gap-y-4">
                    <div>
                        <label className="text-black block mb-2" htmlFor="username">Username</label>
                        <input
                            id="username"
                            className=" w-full p-2 border-2 border-gray-300 rounded-md text-black"
                            placeholder="Username"
                            type="text"
                            onChange={handleUsername}
                        />
                    </div>
                    <div>
                        <label className="text-black block mb-2" htmlFor="password">Password</label>
                        <input
                            id="password"
                            className=" w-full p-2 border-2 border-gray-300 rounded-md"
                            placeholder="Password"
                            type="password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div >
                        <button
                            className="w-full p-2 text-center bg-white border-2 border-blue-700 rounded text-blue-700 cursor-pointer button-3d "
                            type="button"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-center text-black">
                        Don't have an account? <Link to="/Register" className="text-blue-700">Register new account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;