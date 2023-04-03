import React from "react";
import { Link } from "react-router-dom";
import { handleScroll } from "../helper/index";

const MenuItem = ({ ingredientRef, storyRef, burgersRef, locationRef }) => {
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
    console.log(item);
    return (
      <li key={i} className="flex">
        <Link
          onClick={() => {
            handleScroll(item.ref.current);
          }}
          className="text-mine-shaft text-lg uppercase font-bold transition-color duration-300 font-poppins hover:text-cerulean active:bg-transparent"
          to={`#${item.name}`}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  return <>{menu.map(renderItemMenu)}</>;
};

export default MenuItem;
