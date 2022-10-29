import React, { useEffect } from "react";
import "./offters.scss";
import {
  MdKingBed,
  MdBathroom,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import img3 from "../../asset/image-3.jpg";
import img5 from "../../asset/image-5.jpg";
import img7 from "../../asset/image-7.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const offerData = [
  {
    id: 1,
    imgSrc: img3,
    destTitle: "Travel 1",
    location: "Tibet",
    price: "$4,440",
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: "Travel 1",
    location: "France",
    price: "$3,340",
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: "Travel 2",
    location: "China",
    price: "$5,120",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural specteculars, come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {offerData.map((offer) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="singleOffer"
                key={offer.id}
              >
                <div className="destImage">
                  <img src={offer.imgSrc} alt={offer.destTitle} />
                  <span className="discount">30% Off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{offer.price}</h4>
                    <span className="status">For Rent</span>
                  </div>

                  <div className="amennities flex">
                    <div className="singelAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>

                    <div className="singelAmenity flex">
                      <MdBathroom className="icon" />
                      <small>1 Bath</small>
                    </div>

                    <div className="singelAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>

                    <div className="singelAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Gaoxin #120, {offer.location}</small>
                  </div>

                  <button className="btn flex">
                    View Detail <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
