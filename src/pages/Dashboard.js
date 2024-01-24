import React from "react";
import "./../styles/Dashboard/ContDashboard.scss";
import YearMultipleWinners from "../components/Dashboard/YearMultipleWinners";
import TopStudios from "../components/Dashboard/TopStudios";
import Producers from "../components/Dashboard/Producers";
import MovieByYear from "../components/Dashboard/MovieByYear";

const Dashboard = () => {
  const repeater = () => {
    let content = [];
    for (let i = 0; i < 550; i++) {
      content.push(<li key={i}>{i}</li>);
    }
    return content;
  };

  return (
    <div className="cont-dashboard">
      <YearMultipleWinners />
      <TopStudios />
      <Producers />
      <MovieByYear />
      {/* {repeater()} */}
    </div>
  );
};

export default Dashboard;
