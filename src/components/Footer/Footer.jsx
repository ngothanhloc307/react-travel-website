import React from "react";
import "./footer.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="footer">
      <div className="secContainer contianer grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span
            data-aos="fade-up"
            data-aos-duration="3000"
            className="linkTitle"
          >
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel Destination</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+4444 566 2123</span>
          <span className="email">ngothanhloc307@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
