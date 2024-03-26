import React from "react";
import NavbarButton from './Navbar-Components/NavbarButton.jsx';
import LogoutButton from './Navbar-Components/LogoutButton.jsx';

const Navbar = () => {
    return (
        <nav className="sticky top-0 h-16  w-screen bg-white text-black flex items-center justify-between border-b-2 border-black">
            <div className='flex items-center justify-between m-2'>
                <NavbarButton name="Dashboard" link="Dashboard" />
                <NavbarButton name="Categories" link="Catagories" />
                <NavbarButton name="Reports" link="Reports" />
            </div>
            <div className='flex items-center justify-between right-0 m-3'>
                <NavbarButton name={localStorage.getItem('username')} link="Settings" />
                <LogoutButton />
            </div>
        </nav>
    );
}

export default Navbar;