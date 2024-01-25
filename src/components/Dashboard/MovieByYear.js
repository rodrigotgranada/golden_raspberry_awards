import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import Table from "../Others/Table";

const MovieByYear = () => {
  const { loading, data, error, getAllMovies } = useGetData();
  const [finalyMovies, setFinalyMovies] = useState(null);

  //   let finalyMovies = null;
  const handleSearch = async (e) => {
    if (e?.target?.value && e?.target?.value.length === 4) {
      console.log("e", e?.target?.value);
      const movies = await getAllMovies(
        `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${e?.target?.value}`
      );
      setFinalyMovies(movies);
    }
  };
  return (
    <div className="box">
      <h1>List movie winners by year</h1>
      <input
        type="number"
        name="year"
        id="year"
        onChange={handleSearch}
        maxLength="4"
      />
      {loading && <h1>LOADING...</h1>}
      {error && <h1>Servidor Fora do ar...</h1>}
      {console.log("finaly", finalyMovies, finalyMovies?.data?.slice(0, 3))}
      {console.log("DATA", data)}

      <Table
        titles={["Id", "Year", "Title"]}
        items={["id", "year", "title"]}
        data={finalyMovies ? finalyMovies?.data.slice(0, 3) : []}
      />

      {/* {console.log("DATA", data)}
      {data && data.length > 0 && (
        <Table
          titles={["Id", "Year", "Title"]}
          items={["id", "year", "title"]}
          data={data && data.length > 0 ? data?.data.slice(0, 3) : []}
        />
      )} */}
    </div>
  );
};

export default MovieByYear;
