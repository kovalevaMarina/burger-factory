import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import MenuItem from "../Menu/MenuItem";

const Header = ({ ingredientRef, storyRef, burgersRef, locationRef }) => {
  return (
    <header>
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center py-7">
          <Logo />
          <nav>
            <ul className="lg:flex lg:gap-x-16 hidden p-10">
              <MenuItem
                ingredientRef={ingredientRef}
                storyRef={storyRef}
                burgersRef={burgersRef}
                locationRef={locationRef}
              />
            </ul>
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
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
