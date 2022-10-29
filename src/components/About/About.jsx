import React, { useEffect } from "react";
import "./about.scss";
import customerImg from "../../asset/customer.png";
import moutain from "../../asset/mountain.png";
import hiking from "../../asset/hiking.png";
import video from "../../asset/Video.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">Why Hiking?</h3>

        <div className="mainContainer mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singelItem"
          >
            <img src={moutain} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break may from the normal rythyms
              of daily life success reduces stress and improves health and
              well-being
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singelItem"
          >
            <img src={hiking} alt="Image Name" />
            <h3>1000+ Mountains</h3>
            <p>
              Research shows that a chance to break may from the normal rythyms
              of daily life success reduces stress and improves health and
              well-being
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singelItem"
          >
            <img src={customerImg} alt="Image Name" />
            <h3>2000+ Mountains</h3>
            <p>
              Research shows that a chance to break may from the normal rythyms
              of daily life success reduces stress and improves health and
              well-being
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Wonderful House experience in there!</h2>
              <p>
                The Adventure subranking is based on an equally weighted average
                scores from five country
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
