import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarItemsData } from "./SidebarItemsData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebarSelected, setSidebarSelected] = useState(false);
  const showSidebar = () => setSidebarSelected(!sidebarSelected);

  return (
    <>
    <IconContext.Provider value={{color: '#f5f5f5'}}>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <side className={sidebarSelected ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarItemsData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </side>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
