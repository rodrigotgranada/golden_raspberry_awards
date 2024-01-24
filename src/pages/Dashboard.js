import React from "react";
import "./../styles/Dashboard/ContDashboard.scss";
import YearMultipleWinners from "../components/Dashboard/YearMultipleWinners";
import TopStudios from "../components/Dashboard/TopStudios";
import Producers from "../components/Dashboard/Producers";
import MovieByYear from "../components/Dashboard/MovieByYear";

const Dashboard = () => {
  return (
    <div className="cont-dashboard">
      <YearMultipleWinners />
      <TopStudios />
      <Producers />
      <MovieByYear />
    </div>
  );
};

export default Dashboard;
