import React from "react";
import "./../../styles/Others/Table.scss";
import Loader from "./Loader";

const Table = ({ titles, items, isLoading, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {titles.map((title, index) => {
            return <th key={index}>{title}</th>;
          })}
        </tr>
      </thead>
      {isLoading ? (
        <tbody>
          <tr>
            <td colSpan={titles.length}>
              <Loader />
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {data && Object.keys(data).length > 0 && (
            <>
              {data.map((resultado, index) => {
                return (
                  <tr key={index}>
                    {items.map((item, i) => {
                      return <td key={i}>{resultado[item]}</td>;
                    })}
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      )}
    </table>
  );
};

export default Table;
