import React, { useEffect } from "react";
import "./blog.scss";
import { BsArrowRightShort } from "react-icons/bs";
import img2 from "../../asset/image-2.jpg";
import img4 from "../../asset/image-4.jpg";
import img6 from "../../asset/image-6.jpg";
import img8 from "../../asset/image-8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Posts = [
  {
    id: 1,
    postImage: img2,
    title: "A new perspective on Niagara Falls",
    desc: "I skipped the boats and opted for a tour of the recently opened Niagara Parks Power Station, which offers spectacular views of the falls.",
  },
  {
    id: 2,
    postImage: img4,
    title: "Saddling up for a high desert getaway in southern Colorado",
    desc: "For a mother and her tween son, a ranch vacation in Colorado's high desert delivers yee-haw with a side of fine dining.",
  },
  {
    id: 3,
    postImage: img6,
    title: "Ghent is Belgium’s unsung capital of cool",
    desc: "Ghent, Belgium, has never gotten the love of Antwerp or Bruges. Here’s why the increasingly green destination should.",
  },
  {
    id: 4,
    postImage: img8,
    title: "Eight great places to see the Mid-Atlantic’s migrating birds",
    desc: "In the Mid-Atlantic, migratory bird activity along the Atlantic Flyway peaks in September and October.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>An insight to the incredible experince in the world.</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="mainContainer grid"
        >
          {Posts.map((item) => {
            return (
              <div className="singlePost grid" key={item.id}>
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="imgDiv"
                >
                  <img src={item.postImage} alt={item.title} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="postDetails"
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <a
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  href=""
                  className="flex"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
