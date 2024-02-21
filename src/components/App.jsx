import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
