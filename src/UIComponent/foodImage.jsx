import React from "react";
import pizza from "../asset/img/pizza.png";
import shape from "../asset/img/shapeVector.png";

const FoodImage = () => {
  return (
    <div
      className="foodImage"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <img
        src={pizza}
        className="pizza"
        // style={{
        //   // position: "absolute",
        //   width: "735px",
        //   height: "804px",
        // }}
      />
      <img
        src={shape}
        className="shape"
        // style={{
        //   position: "absolute",
        //   zIndex: 2,
        //   width: "752px",
        //   height: "839px",
        //   top: "0px",
        // }}
      />
    </div>
  );
};
export default FoodImage;
