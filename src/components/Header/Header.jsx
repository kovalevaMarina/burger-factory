import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../helper/images";

const Header = () => {
  const menu = [
    {
      name: "ingredient",
      // ref: ingredientRef,
    },
    {
      name: "story",
      // ref: storyRef,
    },
    {
      name: "burgers",
      // ref: burgersRef,
    },
    {
      name: "location",
      // ref: locationRef,
    },
  ];

  const renderItemMenu = (item, i) => {
    return (
      <li key={i} className="hidden md:flex">
        <a
          className="text-lg uppercase font-bold font-poppins text-mine-shaft"
          href="#"
        >
          {item.name}
        </a>
      </li>
    );
  };

  return (
    <header>
      <div className="container px-4">
        <div className="flex justify-between items-center py-7">
          <div>
            <img
              className="w-30 h-10 sm:w-52 sm:h-16"
              src={logo}
              alt="Main logo burger factory"
            />
          </div>
          <nav>
            <ul className="sm:flex">{menu.map(renderItemMenu)}</ul>
          </nav>
          <div>
            <button className="bg-cerulean text-lg rounded-lg sm:py-2 py-1 sm:px-8 px-3 font-bold font-poppins text-mine-shaft">
              Order now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
