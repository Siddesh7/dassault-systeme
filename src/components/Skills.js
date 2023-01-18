import meter1 from "../assets/img/physics-logo.png";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Link } from "react-router-dom";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experiments</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <Link to="/category/mech">
                  {" "}
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Mechanical</h5>
                  </div>
                </Link>
                <Link to="/category/phy">
                  {" "}
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Physics</h5>
                  </div>
                </Link>
                <Link to="/category/maths">
                  {" "}
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Maths</h5>
                  </div>
                </Link>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
