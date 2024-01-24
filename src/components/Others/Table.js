import React from "react";
import "./../../styles/Others/Table.scss";

const Table = ({ titles, items, data }) => {
  //   console.log(titles);
  //   console.log(items);
  //   console.log("data", data);
  return (
    <table>
      <thead>
        <tr>
          {titles.map((title, index) => {
            return <th key={index}>{title}</th>;
          })}
        </tr>
      </thead>
      {data && Object.keys(data).length > 0 && (
        <tbody>
          {data.map((resultado, index) => {
            return (
              <tr key={index}>
                {items.map((item, i) => {
                  return <td key={i}>{resultado[item]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default Table;
