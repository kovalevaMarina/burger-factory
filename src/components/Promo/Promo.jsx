import React from "react";
import { hamburger } from "../helper/images";

const Promo = () => {
  return (
    <section className="bg-im">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center pt-12 pb-2">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="title-h1 mb-5">Burger Factory</h1>
            <h3 className="title-h3 mb-5">
              Your dreamed burger close to your locations!
            </h3>
            <button className="text-md lg:text-lg py-1 px-6 rounded-lg bg-ripe-lemon font-bold font-poppins text-mine-shaft">
              Discover the ingredients
            </button>
          </div>
          <div className="max-w-xs sm:max-w-sm xl:max-w-2xl max-h-[626px]">
            <img
              className="h-full"
              src={hamburger}
              alt="Big hamburger with ingredients"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;