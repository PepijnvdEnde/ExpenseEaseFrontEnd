import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Dashboard";
import LoginPage from "./Login";
import Registration from "./Registration";
import SettingsPage from "./Settings";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<DashboardPage />}/>
              <Route path="/Dashboard" element={<DashboardPage />} />
              <Route path="/Register" element={<Registration />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Settings" element={<SettingsPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
