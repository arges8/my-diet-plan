import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const SidebarItemsData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "side-text",
  },
  {
    title: "My Plan",
    path: "/plan",
    icon: <AiIcons.AiFillBook />,
    className: "side-text",
  },
  {
    title: "My Recipes",
    path: "/recipes",
    icon: <IoIcons.IoRestaurant />,
    className: "side-text",
  },
];
