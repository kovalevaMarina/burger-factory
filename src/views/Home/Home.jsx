import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import Ingredients from "../../components/Ingredients/Ingredients";
import Story from "../../components/Story/Story";
import Location from "../../components/Location/Location";
import Burgers from "../../components/Burgers/Burgers";
import Footer from "../../components/Footer/Footer";
import MenuItem from "../../components/Menu/MenuItem";

const Home = () => {
  const ingredientRef = useRef(null);
  const storyRef = useRef(null);
  const burgersRef = useRef(null);
  const locationRef = useRef(null);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <main>
          <Promo />
          <Ingredients ingredientRef={ingredientRef} />
          <Story storyRef={storyRef} />
          <Burgers burgersRef={burgersRef} />
          <Location locationRef={locationRef} />
        </main>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <MenuItem
            ingredientRef={ingredientRef}
            storyRef={storyRef}
            burgersRef={burgersRef}
            locationRef={locationRef}
          />
        </ul>
      </div>
    </div>
  );
};

export default Home;
