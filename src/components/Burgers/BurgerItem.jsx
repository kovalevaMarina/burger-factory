import React from "react";

const BurgerItem = ({ title, images, index }) => {
  return (
    <div
      className={`shadow-xl p-5 rounded-xl flex flex-col items-center ${
        index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <h3 className="title-h3 mb-14">{title}</h3>
      <div className="w-56 h-56 mb-10">
        <img src={images} alt={`Picture ${title}`} />
      </div>
      <a
        href="#"
        className="text-lg self-end font-poppins text-azure-radiance font-bold transition-all duration-300 hover:opacity-80"
      >
        Details
      </a>
    </div>
  );
};

export default BurgerItem;
