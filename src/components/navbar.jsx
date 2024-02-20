import React from "react";

class NavBar extends React.Component {
    render() {
        return (<nav className="flex justify-between items-center h-16 bg-[#7286D3] text-black relative shadow-sm font-mono  " role="navigation">

            <a href="/" className="p-2 ml-6  border-black border-2 rounded ">Logo</a>
            <div className="p-2 mr-2 border-black border-2 rounded ">Menu</div>
        </nav>
        );
    }
}

export default NavBar;