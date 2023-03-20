import React from "react";
import { hamburger } from "../helper/images";

const Promo = () => {
  return (
    <section className="bg-im flex">
      <div>
        <h1 className="title-h1">Burger Factory</h1>
        <h3 className="title-h3">
          Your dreamed burger close to your locations!
        </h3>
        <button className="text-lg py-1 px-6 rounded-lg bg-ripe-lemon font-bold font-poppins text-mine-shaft">
          Discover the ingredients
        </button>
      </div>
      <div>
        <img src={hamburger} alt="Big hamburger with ingredients" />
      </div>
    </section>
  );
};

export default Promo;
