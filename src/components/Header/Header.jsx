import React from "react";
import handleScroll from "../helper/index";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { logo } from "../helper/images";

const Header = ({ ingredientRef, storyRef, burgersRef, locationRef }) => {
  const menu = [
    {
      name: "ingredient",
      ref: ingredientRef,
    },
    {
      name: "story",
      ref: storyRef,
    },
    {
      name: "burgers",
      ref: burgersRef,
    },
    {
      name: "location",
      ref: locationRef,
    },
  ];

  const renderItemMenu = (item, i) => {
    return (
      <li key={i} className="hidden lg:flex">
        <Link
          onClick={() => handleScroll(item.ref.current)}
          className="text-mine-shaft text-lg uppercase font-bold transition-color duration-300 font-poppins hover:text-cerulean"
          to={`#${item.name}`}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <header>
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center py-7">
          <div>
            <img
              className="w-30 h-10 sm:w-52 sm:h-16"
              src={logo}
              alt="Main logo burger factory"
            />
          </div>
          <nav>
            <ul className="lg:flex lg:gap-x-16">{menu.map(renderItemMenu)}</ul>
            <button className="block py-2 px-3 transition-all bg-transparent lg:hidden hover:bg-mine-shaft hover:bg-opacity-20 rounded-lg">
              <div className="w-5 h-0.5 bg-mine-shaft mb-1"></div>
              <div className="w-5 h-0.5 bg-mine-shaft mb-1"></div>
              <div className="w-5 h-0.5 bg-mine-shaft"></div>
            </button>
          </nav>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
