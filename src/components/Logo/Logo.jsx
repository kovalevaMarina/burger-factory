import React from "react";
import { logo } from "../helper/images";

const Logo = () => {
  return (
    <div>
      <img
        className="w-30 h-10 sm:w-52 sm:h-16"
        src={logo}
        alt="Main logo burger factory"
      />
    </div>
  );
};

export default Logo;
