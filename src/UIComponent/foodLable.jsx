import React from "react";
import "./foodLable.css";
import logo from "../asset/img/logo.png";

// const styles = {
//   logo: {},
//   foodLable: {},
//   foodSmallLable: {},
//   button: {},
// };
const FoodLable = () => {
  return (
    <div className={"foodLableRoot"}>
      <div className={"logo"}>
        <img
          id="image0_716_511"
          width="107"
          height="83"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="foodLable">
        <span style={{ color: "#0E2368" }}>
          Discover the <strong style={{ color: "#E23744" }}>Best</strong> Food
          and Drinks
        </span>
      </div>
      <div className="foodSmallLable">
        <spn>
          Naturally made Healthcare Products for the better care & support of
          your body.
        </spn>
      </div>
      <div className="button">
        <div className="exploreButton">Explore Now!</div>
      </div>
    </div>
  );
};
export default FoodLable;
