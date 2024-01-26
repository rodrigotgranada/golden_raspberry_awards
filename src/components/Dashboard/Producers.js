import React, { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import Table from "../Others/Table";

const Producers = () => {
  const { loading, data, error, getAllMovies } = useGetData();
  useEffect(() => {
    getAllMovies(
      `https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers`
    );
  }, []);
  if (error) return <h1>Servidor Fora do ar...</h1>;
  return (
    <div className="box">
      <h1>Producers with longest and shortest interval between wins</h1>
      <h3>Maximum</h3>
      <Table
        titles={["Producer", "Interval", "Previous Year", "Following Year"]}
        items={["producer", "interval", "previousWin", "followingWin"]}
        isLoading={loading}
        data={data?.data?.max.slice(0, 1)}
      />
      <h3>Minimum</h3>
      <Table
        titles={["Producer", "Interval", "Previous Year", "Following Year"]}
        items={["producer", "interval", "previousWin", "followingWin"]}
        isLoading={loading}
        data={data?.data?.min.slice(0, 1)}
      />
    </div>
  );
};

export default Producers;
