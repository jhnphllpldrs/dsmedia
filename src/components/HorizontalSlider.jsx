import React from "react";
import "../css/HorizontalSlider.css";
import client from "../images/about/client.png";
import client1 from "../images/about/client1.png";
import client2 from "../images/about/client2.png";
import client3 from "../images/about/client3.png";
import client4 from "../images/about/client4.png";
import client5 from "../images/about/client5.png";
import client6 from "../images/about/client6.png";
import client7 from "../images/about/client7.png";

const HorizontalSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={client} />
        </div>
        <div className="slide">
          <img src={client1} />
        </div>
        <div className="slide">
          <img src={client2} />
        </div>
        <div className="slide">
          <img src={client3} />
        </div>
        <div className="slide">
          <img src={client4} />
        </div>
        <div className="slide">
          <img src={client5} />
        </div>
        <div className="slide">
          <img src={client6} />
        </div>
        <div className="slide">
          <img src={client7} />
        </div>

        <div className="slide">
          <img src={client} />
        </div>
        <div className="slide">
          <img src={client1} />
        </div>
        <div className="slide">
          <img src={client2} />
        </div>
        <div className="slide">
          <img src={client3} />
        </div>
        <div className="slide">
          <img src={client4} />
        </div>
        <div className="slide">
          <img src={client5} />
        </div>
        <div className="slide">
          <img src={client6} />
        </div>
        <div className="slide">
          <img src={client7} />
        </div>

       
      </div>
    </div>
  );
};

export default HorizontalSlider;
