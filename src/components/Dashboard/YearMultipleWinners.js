import React, { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import Table from "../Others/Table";

const YearMultipleWinners = () => {
  const { loading, data, error, getAllMovies } = useGetData();
  useEffect(() => {
    getAllMovies(
      `https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners`
    );
  }, []);
  if (error) return <h1>Servidor Fora do ar...</h1>;
  return (
    <div className="box">
      <h1>List Years with multiple winners</h1>
      <Table
        titles={["Year", "Win count"]}
        items={["year", "winnerCount"]}
        isLoading={loading}
        data={data?.data?.years.slice(0, 3)}
      />
    </div>
  );
};

export default YearMultipleWinners;
