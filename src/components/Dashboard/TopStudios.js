import React, { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import Table from "../Others/Table";

const TopStudios = () => {
  const { loading, data, error, getAllMovies } = useGetData();
  useEffect(() => {
    getAllMovies(
      `https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count`
    );
  }, []);

  if (error) return <h1>Servidor Fora do ar...</h1>;
  return (
    <div className="box">
      <h1>Top 3 studios with winners</h1>
      <Table
        titles={["Name", "Count"]}
        items={["name", "winCount"]}
        isLoading={loading}
        data={data?.data?.studios.slice(0, 3)}
      />
    </div>
  );
};

export default TopStudios;
