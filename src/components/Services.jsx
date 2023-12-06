import React, { useEffect } from "react";
import "../css/services.css";
import services1 from "../images/services/services1.png";
import { TbArrowsJoin2 } from "react-icons/tb";
import { Carousel } from "./Carousel";
import Abovefooter from "./abovefooter";
import Footer from "./Footer";
import circle from "../images/circles/circle.png";

const Services = () => {
  useEffect(() => {
    const onBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    const checkNavigation = (event) => {
      const navigationType = performance.getEntriesByType("navigation")[0].type;

      // Check if the page is being loaded from a cache (e.g., when refreshing)
      if (navigationType === "reload") {
        window.scrollTo(0, 0);
      }
    };

    // Add the event listener for beforeunload
    window.addEventListener("beforeunload", onBeforeUnload);

    // Add the event listener for checking navigation type
    window.addEventListener("load", checkNavigation);

    // Remove the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("load", checkNavigation);
    };
  }, []);
  return (
    <div className="pages">
      {/* Services 1 div*/}
      <img className="circle-right" src={circle} />
      <section>
        <p className="section-header">SERVICES WE OFFER</p>
        <div className="services-1-div">
          <div className="services-1-div-head">
            <h1>
              Turn digital dreams
              <br />
              into thriving realities
            </h1>
          </div>
          <div className="services-1-div-p">
            <p>
              Our mission is simple: to build trusted relationships and
              <br />
              provide exceptional value. How do we do it? By
              <br />
              connecting you with expert web developers who deliver
              <br />
              tailored solutions, driving unparalleled business growth.
            </p>
          </div>
        </div>
      </section>
      {/* Services 2 div*/}
      <section>
        <div className="services-2-div">
          <img src={services1} className="services1" alt="services1" />
        </div>
      </section>
      {/* Services 3 div*/}
      <section>
        <p className="section-header">WE DO</p>
        <div className="services-3-div">
          <div className="services-3-div-divs">
            <h1>
              Web Design &<br />
              Maintenance
            </h1>
            <p>
            Transforming Web Experiences: Precision Web Design and Maintenance Solutions. 
            </p>
            {/*
            <a href="/works">
              VIEW OUR PORTFOLIO{" "}
              <TbArrowsJoin2 className="about-4-div-box-icon" />
            </a>*/}
          </div>
          <div className="services-3-div-divs">
            <h1>
              Mobile Web
              <br />
              Maintenance
            </h1>
            <p>
            Elevate Mobility: Seamless Mobile Web Development and Ongoing Optimization.
            </p>
            {/*
            <a href="/works">
              VIEW OUR PORTFOLIO{" "}
              <TbArrowsJoin2 className="about-4-div-box-icon" />
            </a>*/}
          </div>
        </div>
      </section>
      {/* Services 4 div*/}
      {/*
      <img className="circle-left" src={circle} />
      <section className="services-4-section" data-aos="fade-up">
        <p className="section-header">SOME OF OUR FINEST WORK</p>
        <div className="services-4-div">
          <div className="services-4-div-divs">
            <div className="services-4-div-divs-textside">
              <p className="services-4-div-divs-textside-head" data-aos="slide-right">Lorem Ipsum</p>
              <p className="services-4-div-divs-textside-content" data-aos="slide-right">
                Lorem ipsum dolor sit
                <br />
                amet, consectetur
                <br />
                adipiscing elit.
              </p>
              <a href="/works" data-aos="slide-right">
                VIEW FULL STUDY{" "}
                <TbArrowsJoin2 className="about-4-div-box-icon" />
              </a>
            </div>
            <div className="services-4-div-divs-gradientside1" data-aos="slide-left"></div>
          </div>
          <div className="services-4-div-divs-separator" ></div>

          <div className="services-4-div-divs">
            <div className="services-4-div-divs-gradientside2"data-aos="slide-right"></div>
            <div className="services-4-div-divs-textside">
              <p className="services-4-div-divs-textside-head" data-aos="slide-left">Lorem Ipsum</p>
              <p className="services-4-div-divs-textside-content" data-aos="slide-left">
                Lorem ipsum dolor sit
                <br />
                amet, consectetur
                <br />
                adipiscing elit.
              </p>
              <a href="/works"data-aos="slide-left">
                VIEW FULL STUDY{" "}
                <TbArrowsJoin2 className="about-4-div-box-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>*/}
      <Carousel />
      <Abovefooter />
      <Footer />
    </div>
  );
};

export default Services;
