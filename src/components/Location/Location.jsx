import React from "react";
import data from "../helper/data";

const Location = ({ locationRef }) => {
  const renderItemAddress = (elem, i) => {
    return (
      <a
        href={elem.hrefLink}
        key={i}
        target="_blank"
        className="font-normal text-base text-center md:text-xl transition-color duration-300 lg:text-2xl hover:text-cerulean"
      >
        {elem.text}
      </a>
    );
  };

  return (
    <section ref={locationRef} className="pt-5 md:pt-12 mb-10 md:mb-24">
      <div className="container px-4 mx-auto">
        <h2 className="title-h2 text-center mb-7">Location</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 sm:justify-between mb-7">
          <p className="font-bold text-base text-center md:text-xl lg:text-2xl">
            {data.factory}
          </p>
          {data.address.map(renderItemAddress)}
        </div>
        <div className="max-w-4xl h-[450px] mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.7430450492875!2d6.6330401!3d46.524149699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e31ad9a7581%3A0x6910a4219da53f6!2zUGwuIGRlIGxhIFJpcG9ubmUgMTAsIDEwMDUgTGF1c2FubmUsINCo0LLQtdC50YbQsNGA0LjRjw!5e1!3m2!1sru!2sua!4v1679658838981!5m2!1sru!2sua"
            width="600"
            height="450"
            className="w-full h-full rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
