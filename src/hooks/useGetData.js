import React, { useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getAllMovies = async (url) => {
    setLoading(true);
    const values = await axios
      // .get(
      //   `https://tools.texoit.com/backend-java/api/movies?page=0&size=15&winner=true`
      // )
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("res", res);
        setData(res);
        return res;
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return values;
  };
  return { loading, data, error, getAllMovies };
};

export default useGetData;
