import NavBar from "./Navbar";
import HomePage from "./Homepage";
import React, { Component } from "react";


class Page extends Component {
    render() {
        return (
        <>
        <NavBar/>
        <HomePage/>
        </>
         );
    }
}

export default Page;