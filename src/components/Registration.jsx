import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const sendRegistration = async (username, password) => {
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

    const handleRegistration = async () => {
        if (username === "" || password === "") {
            alert("Username or Password cannot be empty");
            return;
        }

        let response = await sendRegistration(username, password);

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

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleRegistration();
        }
    };

    return (
        <div className="w-screen min-h-screen bg-white flex justify-center items-center">
            <div className="w-1/3 bg-white border-2 border-black rounded-lg p-10  text-left">
                <Link to="/Login" className="text-black text-lg text-top mb-4">
                    &larr; Back
                </Link>
                <h1 className="text-4xl text-center text-black mb-4">Register</h1>

                <div className="grid grid-cols-1 gap-y-4 text-left">

                    <div>
                        <label className="text-black  mb-2" htmlFor="username">Username</label>
                        <input
                            id="username"
                            className="rounded-md w-full p-2 border-2 border-black"
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div>
                        <label className="text-black mb-2" htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="rounded-md w-full p-2 border-2 border-black"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <div>
                        <button
                            className="bg-white border-2 border-blue-700 rounded-md text-blue-700 w-full p-2 button-3d"
                            type="button"
                            onClick={handleRegistration}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;