import React from "react";
import "./about.css";
import image from "../asset/img/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImage">
        <img
          id="image0_706_340"
          width="384"
          height="467"
          src={image}
          alt="aboutImage"
        />
      </div>
      <div className="aboutLableWrapper">
        <div className="aboutHeader">About Us</div>
        <div className="aboutSubjectContent">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </div>
        <div className="button">
          <div className="exploreButton">Read More</div>
        </div>
      </div>
    </div>
  );
};
export default About;
