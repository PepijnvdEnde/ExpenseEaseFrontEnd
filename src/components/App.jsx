import { Component } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./Loginpage";
import Registration from "./Registration";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<HomePage />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
