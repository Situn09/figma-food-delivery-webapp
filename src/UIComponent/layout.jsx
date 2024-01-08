import React from "react";
import FoodLable from "./foodLable";
import FoodImage from "./foodImage";
import About from "./about";
import Articles from "./articles";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="layout">
      <div className="a">
        <FoodLable />
      </div>
      <div className="b">
        <FoodImage />
      </div>
      <div className="c">
        <About />
      </div>
      <div className="d">
        <Articles />
      </div>
      <div className="e">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
