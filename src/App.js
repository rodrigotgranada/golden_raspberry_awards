import React from "react";
import Header from "./components/Home/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import "./styles/Home/Layout.scss";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <div className="container-flex">
          <div className="container-row">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/list" element={<List />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
