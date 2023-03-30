import React from "react";

const IngredientsItem = ({ name, image }) => {
  return (
    <div className="carousel-item">
      <div className="max-w-60 max-h-64 shadow-xl flex flex-col items-center gap-6 p-5 rounded-xl">
        <div className="w-48 h-40 flex items-center justify-center">
          <img
            className="h-full bg-cover"
            src={image}
            alt={`Picture ${name}`}
          />
        </div>
        <h4 className="title-h4">{name}</h4>
      </div>
    </div>
  );
};

export default IngredientsItem;
