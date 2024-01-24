import React, { useEffect } from "react";
import useGetData from "../../hooks/useGetData";

const MovieByYear = () => {
  const { loading, data, error, getAllMovies } = useGetData();
  useEffect(() => {
    getAllMovies(
      `https://tools.texoit.com/backend-java/api/movies?winner=true&year=1980`
    );
  }, []);

  if (loading) return <h1>LOADING...</h1>;
  if (error) return <h1>Servidor Fora do ar...</h1>;
  return (
    <div className="box">
      <h1>List movie winners by year</h1>
    </div>
  );
};

export default MovieByYear;
