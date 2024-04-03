import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarButton({ name, link }) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname === `/${link}`);

    useEffect(() => {
        setIsActive(location.pathname === `/${link}`);
    }, [location.pathname, link]);

    const buttonClass = isActive 
        ? "p-2 mr-2 w-max text-center my-2 bg-white border-2 rounded-lg border-gray-300 text-black cursor-pointer button-3d active shadow-md" 
        : "p-2 mr-2 w-max text-center my-2 bg-white border-2 rounded-lg border-gray-300 text-black cursor-pointer button-3d shadow-md";

    return (
        <Link to={`/${link}`} className={buttonClass}>
            {name}
        </Link>
    );
}

export default NavbarButton;