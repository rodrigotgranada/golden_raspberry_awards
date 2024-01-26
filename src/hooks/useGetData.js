import React, { useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getAllMovies = async (url) => {
    setLoading(true);
    const values = await axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
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

  const getPaginateData = async ({ page, size, year, winner }) => {
    setLoading(true);
    const values = await axios
      .get(
        `https://tools.texoit.com/backend-java/api/movies?page=${page}&size=${size}${
          winner ? `&winner=${winner}` : ""
        }${year ? `&year=${year}` : ""}`
      )
      .then((res) => {
        const { data } = res;
        setData(data);
        return data;
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return values;
  };
  return { loading, data, error, getAllMovies, getPaginateData };
};

export default useGetData;
