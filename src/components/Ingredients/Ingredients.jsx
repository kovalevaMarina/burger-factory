import React from "react";
import IngredientsItem from "./IngredientsItem";
import { buns, salad, tomato, cheese, meat } from "../helper/images";

const Ingredients = ({ ingredientRef }) => {
  const ingredientsData = [
    {
      name: "Buns",
      image: buns,
    },

    {
      name: "Salad",
      image: salad,
    },

    {
      name: "Tomato",
      image: tomato,
    },
    {
      name: "Cheese",
      image: cheese,
    },

    {
      name: "Meat",
      image: meat,
    },
  ];

  return (
    <section ref={ingredientRef} className="pt-5 md:pt-12 mb-10 md:mb-24">
      <div className="container px-4 mx-auto max-w-[1230px]">
        <h2 className="title-h2 mb-5 text-center">Ingredients</h2>
        <h3 className="title-h3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          id arcu vel maximus.
        </h3>
        <div className="relative">
          <div className="flex gap-12 carousel py-12">
            {ingredientsData.map((ingredient, i) => {
              return <IngredientsItem {...ingredient} key={i} />;
            })}
          </div>
          <div className="carousel-bg absolute top-0 right-0 h-full w-12"></div>
        </div>
        <p className="text-main text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue,
          non commodo elit. Integer risus orci, ultricies ac dapibus sed,
          dignissim interdum quam. Proin quis dignissim diam. Donec id magna
          placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies
          erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo
          nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem,
          mollis ut feugiat ac, ultricies eu dolor.
        </p>
      </div>
    </section>
  );
};

export default Ingredients;
