import React, { useEffect, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import Loader from "../Others/Loader";
import Pagination from "./Pagination";

const TablePagination = ({
  columns,
  data,
  isLoading,
  footer,
  manualPagination = false,
}) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columnData,
      data: rowData,
      manualPagination,
    });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="table-header">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <Loader />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={columns.length}>
                  <Pagination
                    totalRows={footer.totalRows}
                    pageChangeHandler={footer.pageChangeHandler}
                    rowsPerPage={footer.rowsPerPage}
                    currentPage={footer.currentPage}
                  />
                </td>
              </tr>
            </tfoot>
          </>
        )}
      </table>
    </>
  );
};

export default TablePagination;
