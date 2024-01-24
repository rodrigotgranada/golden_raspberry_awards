import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";
import useGetData from "./hooks/useGetData";
import YearMultipleWinners from "./components/Dashboard/YearMultipleWinners";
import Header from "./components/Home/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import "./styles/Home/Layout.scss";

function App() {
  // useEffect(() => {
  //   (async () => {
  //     axios
  //       .get(`https://tools.texoit.com/backend-java/api/movies?page=0&size=15`)
  //       .then((res) => {
  //         console.log("Funciona", res);
  //       });

  //     setMovies("");
  //   })();

  //   return () => {
  //   };
  // }, []);

  // useEffect(() => {
  //   getAllMovies(
  //     `https://tools.texoit.com/backend-java/api/movies?page=0&size=15`
  //   );
  // }, []);

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
