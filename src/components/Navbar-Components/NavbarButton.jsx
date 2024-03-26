import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarButton({ name, link }) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname === `/${link}`);

    useEffect(() => {
        setIsActive(location.pathname === `/${link}`);
    }, [location.pathname, link]);

    const buttonClass = isActive 
        ? "p-2 mr-2 w-max text-center my-2 bg-white border-2  border-black text-black cursor-pointer button-3d active" 
        : "p-2 mr-2 w-max text-center my-2 bg-white border-2  border-black text-black cursor-pointer button-3d";

    return (
        <Link to={`/${link}`} className={buttonClass}>
            {name}
        </Link>
    );
}

export default NavbarButton;