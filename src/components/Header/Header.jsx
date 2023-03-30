import React from "react";
import { handleScroll } from "../helper/index";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

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
      <li key={i} className="flex">
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
          <Logo />
          <nav>
            <ul className="lg:flex lg:gap-x-16 fixed lg:static">
              {menu.map(renderItemMenu)}
            </ul>
            <label className="btn swap swap-rotate bg-transparent border-aqua lg:hidden">
              <input type="checkbox" />
              <svg
                className="swap-off fill-aqua"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-aqua"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            {/* <button className="block py-2 px-3 transition-all bg-transparent lg:hidden hover:bg-mine-shaft hover:bg-opacity-20 rounded-lg">
              <div className="w-5 h-0.5 bg-mine-shaft mb-1"></div>
              <div className="w-5 h-0.5 bg-mine-shaft mb-1"></div>
              <div className="w-5 h-0.5 bg-mine-shaft"></div>
            </button> */}
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
