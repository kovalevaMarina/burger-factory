import React from "react";

const Location = ({ locationRef }) => {
  return (
    <section ref={locationRef} className="pt-5 md:pt-12 mb-10 md:mb-24">
      <div className="container px-4 mx-auto">
        <h2 className="title-h2 text-center">Location</h2>
      </div>
    </section>
  );
};

export default Location;
