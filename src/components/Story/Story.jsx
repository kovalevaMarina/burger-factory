import React from "react";
import { story_burger } from "../helper/images";

const Story = ({ storyRef }) => {
  return (
    <section ref={storyRef}>
      <div className="container px-4">
        <div className="flex">
          <div>
            <h2 className="title-h2">The story</h2>
            <h3 className="title-h3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis id arcu vel maximus.
            </h3>
            <p className="text-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus
              augue, non commodo elit. Integer risus orci, ultricies ac dapibus
              sed, dignissim interdum quam. Proin quis dignissim diam. Donec id
              magna placerat, fringilla odio et, efficitur lacus. Vivamus eu
              ultricies erat, eu lobortis nunc. Sed nec dignissim libero.
              Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper
              turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.
            </p>
          </div>
          <div>
            <img src={story_burger} alt="Picture burger with ingredients" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
