import React, { useEffect } from "react";
import Footer from "./Footer";
import "../css/about.css";
import about1 from "../images/about/about1.png";
import about2 from "../images/about/about2.png";
import about3 from "../images/about/about3.png";
import about4 from "../images/about/about4.png";
import about5 from "../images/about/about5.png";
import about6 from "../images/about/about6.png";
import about7 from "../images/about/about7.png";
import client from "../images/about/client.png";
import { TbArrowsJoin2 } from "react-icons/tb";
import circle from "../images/circles/circle.png";
import { Carousel } from "./Carousel";
import Abovefooter from "./abovefooter";
import HorizontalSlider from "./HorizontalSlider";


const About = () => {
  useEffect(() => {
    const onBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    const checkNavigation = (event) => {
      const navigationType = performance.getEntriesByType('navigation')[0].type;

      // Check if the page is being loaded from a cache (e.g., when refreshing)
      if (navigationType === 'reload') {
        window.scrollTo(0, 0);
      }
    };

    // Add the event listener for beforeunload
    window.addEventListener('beforeunload', onBeforeUnload);

    // Add the event listener for checking navigation type
    window.addEventListener('load', checkNavigation);

    // Remove the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      window.removeEventListener('load', checkNavigation);
    };
  }, []);
  return (
    <div className="pages">
      {/* About 1 div*/}
      <img className="circle-right" src={circle} />
      <section>
        <p className="section-header">WHO WE ARE</p>
        <div className="about-1-div">
          <div className="about-1-div-head">
            <h1>Innovators in Action</h1>
          </div>
          <div className="about-1-div-p">
            <p>
              At DS Media, we are more than just a company—we are a<br />
              collective force of innovators committed to turning ideas
              <br />
              into impactful realities. Our team thrives on creativity,
              <br />
              collaboration, and a shared passion for crafting digital
              <br />
              solutions that leave a lasting impression.
            </p>
          </div>
        </div>
      </section>
      {/* About 2 div*/}
      <section>
        <p className="section-header">WHAT WE DO</p>
        <div className="about-2-div">
          <div className="about-2-div-leftside">
            <img src={about1} className="About-2-div-pic1" alt="pic1" />
          </div>
          <div className="about-2-div-rightside">
            <h1>
              Mission
              <br />
              Statement
            </h1>
            <p>
              Our mission is to build trusted relationships and
              <br />
              provide exceptional value by matching clients
              <br />
              with expert web developers that deliver tailored
              <br />
              solutions and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* About 3 div*/}
      <section>
        <div className="about-3-div">
          <p className="section-header">Meet our Team</p>
          <img src={about2} className="About-2-div-pic2" alt="pic2"/>
        </div>
      </section>
      <img className="circle-left" src={circle}/>
      {/* About 4 div*/}
      <section className="about-4-div">
        <div className="about-4-div">
        <div className="about-4-div-box">
            <h2>Karl Delos - Santos</h2>
            <h1>Sales Associate</h1>
            <p>
              The things I like the
              <br />
              most is to explore and
              <br />
              travel
            </p>
          </div>
          <div className="about-4-div-box">
            <h2>Kyle Corpuz</h2>
            <h1>Front end Developer</h1>
            <p>
              Solving puzzle is the
              <br />
              thing I love to do
            </p>
          </div>
          <div className="about-4-div-box">
            <h2>Aldrei Torres</h2>
            <h1>UI/UX Designer</h1>
            <p>
              My passion in designing
              <br />
              is the one who brought 
              <br />
              me here.
            </p>
          </div>
          <div className="about-4-div-box">
            <h2>Christina Mellizo</h2>
            <h1>Social Media Manager</h1>
            <p>
              Making engagements with
              <br />
              clients to help them
              <br />
              succeed.
            </p>
          </div>
          <div className="about-4-div-box">
            <h2>Vincent Viojan</h2>
            <h1>Back end Developer</h1>
            <p>
              I like to explore
              <br />
              things that include
              <br />
              coding
            </p>
          </div>
        </div>
      </section>
      {/* About 5 div*/}
      <section>
        <p className="about-5-div">
          We provide more than just services; we deliver tailored digital
          <br />
          solutions designed to meet your unique needs.
        </p>
      </section>

      {/* About 6 div*/}
      <section>
        <div className="about-6-div">
          <div className="About-6-div-leftside">
            <img src={about6} className="About-6-div-pic6" alt="about 6 pic"/>
          </div>
          <div className="About-6-div-rightside">
            <p className="About-6-div-rightside-p">
              Taking a comprehensive stance, we apply our
              <br />
              proficiency in information technology to
              <br />
              address every aspect of web and mobile
              <br />
              website design, ensuring we cater to the
              <br />
              complete spectrum of our clients' digital
              <br />
              presence and marketing requirements.
            </p>
          </div>
        </div>
      </section>
      {/* About 7 div*/}
      <div className="About-7-div">
        <div className="About-7-div-leftside">
          <p>YOUR BEST DIGITAL AGENCY</p>
          <h1>
            DB Media's one
            <br />
            liner quote**
          </h1>
          {/*
          <a href="https://www.example.com" className="About-7-div-a">
            VIEW OUR PORTFOLIO{" "}
            <TbArrowsJoin2 className="about-4-div-box-icon" />
          </a>*/}
        </div>
        <div className="About-7-div-rightside">
          <img src={about7} className="About-7-div-rightside-pic7" />
        </div>
      </div>

      {/* About 8 div*/}
      {/*

      <div className="About-8-div">
        <div className="About-8-div-top">
          <h1>Our Clients</h1>
          <p>Connecting business owners to professional web development help</p>
        </div>
       
        <div className="About-8-div-bottom">
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
          <div class="About-8-div-grid-item"><img src={client}/>KRIMC</div>
        </div>
     
        <HorizontalSlider/>
      </div>*/}
      <Carousel />
      <Abovefooter />
      <Footer />
    </div>
  );
};

export default About;
