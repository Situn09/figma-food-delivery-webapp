import React from "react";
import logo from "../asset/img/logo.png";
import facbook from "../asset/img/facebook.png";
import twitter from "../asset/img/twitter.png";
import instagram from "../asset/img/instagram.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="img">
        <img height={"125px"} src={logo} alt="logo" />
      </div>
      <div className="contactSection">
        <span className="head">Contact Us</span>
        <span>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </span>
        <span>example2020@gmail.com</span>
        <span>(904) 443-0343</span>
      </div>
      <div className="moreSection">
        <span className="head">More</span>
        <span>About Us</span>
        <span>Products</span>
        <span>Careers</span>
        <span>Contact Us</span>
      </div>
      <div className="linkSection">
        <span className="head socialLink">Social Links</span>
        <div className="space">
          <div className="icon">
            <div>
              <img src={instagram} alt="inst" />
            </div>
            <div>
              <img src={twitter} alt="twit" />
            </div>
            <div>
              <img src={facbook} alt="fac" />
            </div>
          </div>
          <span>© 2022 Food Truck Example</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
