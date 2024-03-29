import React from "react";
import { SidebarData } from "./SidebarData";
import "./../../styles/Home/Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <NavLink
              to={item.path}
              title={item.title}
              className={(navClass) =>
                navClass.isActive ? `anchor active` : "anchor"
              }
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default Sidebar;
