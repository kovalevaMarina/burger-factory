import React from "react";
import BurgerItem from "./BurgerItem";
import { burger } from "../helper/images";
import Button from "../Button/Button";

const Burgers = ({ burgersRef }) => {
  const burgersData = [
    {
      title: "1/4 Pound Cheese",
      images: burger,
    },

    {
      title: "Big Burger",
      images: burger,
    },

    {
      title: "Pure Bacon",
      images: burger,
    },
  ];

  return (
    <section ref={burgersRef} className="pt-5 md:pt-12 mb-10 md:mb-24">
      <div className="container px-4 mx-auto">
        <h2 className="title-h2 text-center">Burgers</h2>
        <div className="grid sm:grid-cols-2 sm:auto-cols-auto lg:grid-cols-3 gap-9 mb-12">
          {burgersData.map((burger, i) => (
            <BurgerItem {...burger} key={i} index={i} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Burgers;
