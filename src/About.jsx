import React from "react";
import Common from "./Common";
import information from "./images/information.png";
const About = () => {
  return (
    <>
      <Common
        name=" Welcome to About page "
        imgsrc={information}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
