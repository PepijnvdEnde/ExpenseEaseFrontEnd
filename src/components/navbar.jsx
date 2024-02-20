import { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
        <nav className="sticky top-0 h-16 w-screen bg-[#0E2954] text-[#82B1FF]  flex items-center justify-around box-content border-b-2 border-[#3A1078]" role="navigation">
            <a href="/" className="p-2 ml-6 border-[#82B1FF] border-2 rounded ">Logo</a>
            <div className="p-2 mr-2 border-[#82B1FF] border-2 rounded ">Menu</div>
        </nav>
        
        );
    }
}

export default NavBar;