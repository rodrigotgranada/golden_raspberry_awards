import React, { useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getAllMovies = async (url) => {
    setLoading(true);
    axios
      // .get(
      //   `https://tools.texoit.com/backend-java/api/movies?page=0&size=15&winner=true`
      // )
      .get(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { loading, data, error, getAllMovies };
};

export default useGetData;
