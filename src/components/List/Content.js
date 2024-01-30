import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import TablePagination from "./TablePagination";

const Content = () => {
  const [baseUrl, setBaseUrl] = useState({
    page: 0,
    size: 15,
    winner: null,
    year: null,
  });
  const [pageData, setPageData] = useState({
    rowData: [],
    totalPages: 0,
    totalElements: 150,
  });

  const { loading, error, getPaginateData } = useGetData();

  useEffect(() => {
    (async () => {
      const values = await getPaginateData(baseUrl);
      const { totalPages, totalElements, content } = values;
      setPageData({
        rowData: formatRowData(content),
        totalPages,
        totalElements: totalElements,
      });
    })();

    return () => {};
  }, [baseUrl]);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      id: "year",
      Header: () => {
        const handleSearch = (e) => {
          if (e?.target?.value && e?.target?.value.length === 4) {
            setBaseUrl((prevState) => ({
              ...prevState,
              year: e?.target?.value,
            }));
          }
          if (!e?.target?.value || e?.target?.value.length === 0) {
            setBaseUrl((prevState) => ({
              ...prevState,
              year: null,
            }));
          }
        };
        return (
          <div>
            <h3>Year</h3>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="Filter by year"
              defaultValue={baseUrl.year}
              onChange={handleSearch}
            />
          </div>
        );
      },
      accessor: "year",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      id: "winner",
      Header: () => {
        const handleSearch = (e) => {
          console.log(e.target.value);
          if (e.target.value != "none") {
            setBaseUrl((prevState) => ({
              ...prevState,
              winner: e?.target?.value,
            }));
          } else {
            setBaseUrl((prevState) => ({
              ...prevState,
              winner: null,
            }));
          }
        };
        return (
          <div>
            <h3>Winner?</h3>
            <select
              name={"winner"}
              id={"winner"}
              className="winner"
              onChange={handleSearch}
              defaultValue={!baseUrl.winner ? "none" : baseUrl.winner}
            >
              <option value={"none"}>Yes/No</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        );
      },
      accessor: (d) => {
        const valor = d.winner === false ? "NO" : "YES";
        return valor;
      },
    },
  ];
  if (error) return <h1>Servidor Fora do ar...</h1>;

  const formatRowData = (rawData) =>
    rawData.map((info) => ({
      id: info.id,
      year: info.year,
      title: info.title,
      winner: info.winner,
    }));

  return (
    <>
      <div className="box">
        <h1>List movies </h1>
        <TablePagination
          columns={columns}
          data={pageData.rowData}
          isLoading={loading}
          footer={{
            totalRows: pageData.totalElements,
            pageChangeHandler: setBaseUrl,
            rowsPerPage: baseUrl.size,
            currentPage: baseUrl.page,
          }}
        />
      </div>
    </>
  );
};

export default Content;
