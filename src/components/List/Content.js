import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";

const columns = [
  {
    Header: "ID",
  },
  {
    Header: "Year",
  },
  {
    Header: "Title",
  },
  {
    Header: "Winner?",
  },
];

const Content = () => {
  const [items, setItems] = useState([]);
  const { loading, data, error, getAllMovies } = useGetData();

  useEffect(() => {
    getAllMovies(
      `https://tools.texoit.com/backend-java/api/movies?page=1&size=15`
    );
  }, []);

  if (loading) return <h1>LOADING...</h1>;
  if (error) return <h1>Servidor Fora do ar...</h1>;

  return <>{console.log("DATA2", data)}</>;
};

export default Content;
