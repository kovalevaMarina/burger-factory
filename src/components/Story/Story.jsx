import React from "react";
import { story_burger } from "../helper/images";

const Story = ({ storyRef }) => {
  return (
    <section ref={storyRef} className="pt-5 md:pt-12 mb-10 md:mb-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="basis-1/2">
            <h2 className="title-h2 mb-5 text-center xl:text-left">
              The story
            </h2>
            <h3 className="title-h3 mb-12 text-center xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis id arcu vel maximus.
            </h3>
            <p className="text-main text-center xl:text-left">
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
          <div className="basis-1/2">
            <img
              className="h-full"
              src={story_burger}
              alt="Picture burger with ingredients"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
