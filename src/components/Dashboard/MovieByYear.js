import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import Table from "../Others/Table";
import { FaSearch } from "react-icons/fa";
import "./../../styles/Dashboard/MovieByYear.scss";

const MovieByYear = () => {
  const { loading, data, error, getAllMovies } = useGetData();
  const [selectedYear, setSelectedYear] = useState("");
  const [finalyMovies, setFinalyMovies] = useState(null);

  const handleSearch = async (e) => {
    if (selectedYear && selectedYear.length === 4) {
      const movies = await getAllMovies(
        `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${selectedYear}`
      );
      setFinalyMovies(movies);
    }
  };
  return (
    <div className="box">
      <h1>List movie winners by year</h1>
      <div className="line-search">
        <input
          type="number"
          name="year"
          id="year"
          className="year"
          placeholder="Search by year"
          onChange={(e) => setSelectedYear(e?.target?.value)}
          maxLength="4"
        />
        <span>
          <button
            id={"search"}
            name={"search"}
            className="search"
            type="button"
            onClick={() => handleSearch(selectedYear)}
          >
            <FaSearch />
          </button>
        </span>
      </div>

      {error && <h1>Servidor Fora do ar...</h1>}

      <Table
        titles={["Id", "Year", "Title"]}
        items={["id", "year", "title"]}
        isLoading={loading}
        data={finalyMovies ? finalyMovies?.data.slice(0, 3) : []}
      />
    </div>
  );
};

export default MovieByYear;
