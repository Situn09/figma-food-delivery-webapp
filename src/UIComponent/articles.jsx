import React, { useState } from "react";
import "./articles.css";
import tomato from "../asset/img/tomato.png";
import snaks from "../asset/img/snaks.png";
import workout from "../asset/img/workout.png";
import corn from "../asset/img/corn.png";
import crunchwrap from "../asset/img/crunchwrap.png";
import broccoli from "../asset/img/broccoli.png";
import left from "../asset/img/left.png";
import right from "../asset/img/right.png";

const articlesArr = {
  first: [
    {
      img: tomato,
      header: "Grilled Tomatoes at Home",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: snaks,
      header: "Snacks for Travel",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: workout,
      header: "Post-workout Recipes",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ],
  second: [
    {
      img: corn,
      header: "How To Grill Corn",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: crunchwrap,
      header: "Crunchwrap Supreme",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      img: broccoli,
      header: "Broccoli Cheese Soup",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ],
};

const Article = ({ data }) => {
  return (
    <div className="article">
      <div
        style={{
          padding: "20px",
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
        }}
      >
        <div>
          <img src={data.img} width={"100%"} />
        </div>
        <div className="articleCardSubWrapper">
          <div className="articleSubHeader">
            <span>{data.header}</span>
          </div>
          <div className="articleSubjectContent">
            <span>{data.content}</span>
          </div>
          <div>
            <div className="articleButton">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const [page, setPage] = useState("first");
  return (
    <div className="articlesWrapper">
      <div className="articleHeader">Latest Articles</div>
      <div className="articleCardsWrapper">
        {articlesArr[page]?.map((data) => (
          <Article data={data} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="pageButton"
          style={{ display: "flex", paddingTop: "50px" }}
        >
          <div
            style={{
              border: "solid 1px #AFAFAF",
              borderRadius: "2px",
              padding: "5px",
              width: "10px",
              height: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              setPage("first");
            }}
          >
            <img src={left} />
          </div>
          <div style={{ paddingRight: "5px", paddingLeft: "5px" }}>
            {page == "first" ? 1 : 2}/2
          </div>
          <div
            style={{
              border: "solid 1px #AFAFAF",
              borderRadius: "2px",
              padding: "5px",
              width: "10px",
              height: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              setPage("second");
            }}
          >
            <img src={right} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
