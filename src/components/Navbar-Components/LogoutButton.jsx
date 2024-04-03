import React from "react";

const LogoutButton = () => {

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('username');
        window.location.href = "/Login";
    }

    return (
        <button onClick={handleLogout} className="p-2 mr-2 w-max text-center my-2 bg-white border-2 border-gray-300 rounded-lg text-black cursor-pointer button-3d shadow-md">
            Logout
        </button >
    );
}

export default LogoutButton;