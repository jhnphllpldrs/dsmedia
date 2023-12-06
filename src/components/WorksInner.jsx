import React,{useEffect} from "react";
import "../css/WorksInner.css";
import WorksInner1 from "../images/worksinner/WorksInner1.png";
import WorksInner2 from "../images/worksinner/WorksInner2.png";
import WorksInner3 from "../images/worksinner/WorksInner3.png";
import WorksInner4 from "../images/worksinner/WorksInner4.png";
import WorksInner5 from "../images/worksinner/WorksInner5.png";
import { Carousel } from "./Carousel";
import Abovefooter from "./abovefooter";
import Footer from "./Footer";

const WorksInner = () => {

  return (
    <div className="pages">
      <section>
        <div className="WorksInner-1-div">
          <h1>Real Estate Website</h1>
          <div className="WorksInner-1-div-buttons">
            <button>WEB</button>
            <button>MOBILE</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Enim tortor ut ornare commodo orci dignissim arcu quis
            <br />
            lorem. Viverra sed ut viverra vitae aliquam. Eu nibh libero
            <br />
            ultrices leo est.
          </p>
        </div>
      </section>
      <section>
        <div className="WorksInner-2-div">
          <img src={WorksInner1} />
          <img src={WorksInner2} />
          <img src={WorksInner3} />
          <img src={WorksInner4} />
          <img src={WorksInner5} />
          <button>VIEW MORE WORKS</button>
        </div>
      </section>
      <Carousel />
      <Abovefooter />
      <Footer />
    </div>
  );
};

export default WorksInner;
