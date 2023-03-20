import React from "react";
import { buns, salad, tomato, cheese } from "../helper/images";

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
  ];

  return (
    <section ref={ingredientRef}>
      <div className="container px-4">
        <h2 className="title-h2">Ingredients</h2>
        <h3 className="title-h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          id arcu vel maximus.
        </h3>
        <div className="flex">
          {ingredientsData.map((ingredient, i) => {
            return (
              <div key={i}>
                <div>
                  <img
                    src={ingredient.image}
                    alt={`Picture ${ingredient.name}`}
                  />
                </div>
                <h4>{ingredient.name}</h4>
              </div>
            );
          })}
        </div>
        <p className="text-main">
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
