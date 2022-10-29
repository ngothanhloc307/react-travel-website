import "./popular.scss";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
// Import the images=============================================
import img3 from "../../asset/image-3.jpg";
import img5 from "../../asset/image-5.jpg";
import img7 from "../../asset/image-7.jpg";
import img9 from "../../asset/image-9.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const Data = [
    {
      id: 1,
      imgSrc: img3,
      destTitle: "Travel 1",
      location: "Tibet",
      grade: "CULTURAL RELAX",
    },
    {
      id: 2,
      imgSrc: img5,
      destTitle: "Travel 1",
      location: "France",
      grade: "CULTURAL RELAX",
    },
    {
      id: 3,
      imgSrc: img7,
      destTitle: "Travel 2",
      location: "China",
      grade: "CULTURAL RELAX",
    },
    {
      id: 4,
      imgSrc: img9,
      destTitle: "Travel 3",
      location: "England",
      grade: "CULTURAL RELAX",
    },
  ];
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cites to natural specteculars, come see the best
              of the world!
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map((item) => {
            return (
              <div
                data-aos="fade-right"
                className="singelDestination"
                key={item.id}
              >
                <div className="destImage">
                  <img src={item.imgSrc} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{item.destTitle}</h3>
                    <p>{item.location}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{item.id}</div>

                  <div className="destText flex">
                    <h6>{item.location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
