import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import Ingredients from "../../components/Ingredients/Ingredients";

const Home = () => {
  const ingredientRef = useRef(null);
  const storyRef = useRef(null);
  const burgersRef = useRef(null);
  const locationRef = useRef(null);

  return (
    <>
      <Header
        ingredientRef={ingredientRef}
        storyRef={storyRef}
        burgersRef={burgersRef}
        locationRef={locationRef}
      />
      <main>
        <Promo />
        <Ingredients ingredientRef={ingredientRef} />
      </main>
    </>
  );
};

export default Home;
