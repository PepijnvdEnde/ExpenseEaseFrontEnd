import { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./DashboardPage";
import LoginPage from "./Loginpage";
import Registration from "./Registration";
import AddfundsPage from "./Addfunds";
import ManagefundsPage from "./Managefunds";
import CatagoriesPage from "./Catagories";
import ReportsPage from "./Reports";
import SettingsPage from "./Settings";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Addfunds" element={<AddfundsPage />} />
          <Route path="/Managefunds" element={<ManagefundsPage />} />
          <Route path="/Catagories" element={<CatagoriesPage />} />
          <Route path="/Reports" element={<ReportsPage />} />
          <Route path="/Settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
