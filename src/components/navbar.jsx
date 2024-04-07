import React from "react";
import NavbarButton from './Navbar-Components/NavbarButton.jsx';
import LogoutButton from './Navbar-Components/LogoutButton.jsx';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 h-16 w-screen bg-white text-black flex items-center justify-between border-b-2 border-gray-300 shadow-md navbar">
            <div className='flex items-center justify-between m-2'>
                <NavbarButton name="Dashboard" link="Dashboard" />
            </div>
            <div className='flex items-center justify-between right-0 m-3'>
                <NavbarButton name={localStorage.getItem('username')} link="Settings" />
                <LogoutButton />
            </div>
        </nav>
    );
}

export default Navbar;