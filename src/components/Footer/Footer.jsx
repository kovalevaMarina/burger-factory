import React from "react";
import Logo from "../Logo/Logo";
import data from "../helper/data";
import { renderItemAddress } from "../helper/index";

const Footer = () => {
  return (
    <footer className="py-4 bg-neutral-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <Logo />
          <div className="flex flex-col items-center sm:items-end sm:flex-end mt-5 gap-2">
            <p className="text-sm font-bold">{data.factory}</p>
            {data.address.map(renderItemAddress)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
