import React, { useEffect } from "react";
import "../css/home.css";
import { BsTelephone } from "react-icons/bs";
import home1 from "../images/home/home1.png";
import home2 from "../images/home/home2.png";
import home3 from "../images/home/home3.png";
import home4 from "../images/home/home4.png";
import home5 from "../images/home/home5.png";
import home6client from "../images/home/home6client.png";
import home7apos from "../images/home/home7apos.png";
import { Carousel } from "./Carousel";
import Footer from "./Footer";
import Abovefooter from "./abovefooter";
import circle from "../images/circles/circle.png";
import { Link } from "react-router-dom";

const Home = () => {
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
      {/* Home 1 div*/}
      <img className="circle-right" src={circle} />

      <section>
        <div className="home-1-div">
          <div className="section-head-div">
            <p className="section-head">
              Connecting
              <br />
              <strong>business owners </strong>to
              <br />
              <strong>
                <span style={{ color: "#8b23f4" }}>professional</span> web
                <br />
                <span style={{ color: "#8b23f4" }}>development</span> help
              </strong>
            </p>
          </div>
          <div>
            <p className="section-sub">
              We’ll keep it easy, tell us what you need and
              <br />
              we’ll make it. Removing the stress from you.
            </p>
          </div>
          <div>
            <Link to="/contact" className="home-link">
              <button className="home-btn">Book a Free Consultation</button>
            </Link>
          </div>
        </div>
      </section>
      <img className="circle-left" src={circle} />

      {/* Home 2 div*/}

      <section>
        <p className="section-header">ABOUT</p>
        <div className="home-2-div">
          <div className="home-2-div-1">
            <p className="home-2-div-p-head">
              At DS Media, we keep it
              <br />
              easy, tell us what you need
              <br />
              and we'll make it.
            </p>
            <p>
              We've streamlined the entire web
              <br />
              experience for you. We believe in
              <br />
              simplicity and focus, putting the power
              <br />
              back in your hands. Wondering how? Well,
              <br />
              just tell us what you need, and we'll craft it
              <br />
              into reality, lifting the burden of stress
              <br />
              from your shoulders. After all, websites are
              <br /> our forte, and we want you to
              <br />
              concentrate on what you do best while we
              <br />
              take care of the digital front.
            </p>
            <Link to="/about" className="home-link">
              <button className="home-btn-2">Learn More</button>
            </Link>
          </div>

          <div className="home-2-div-2">
            <div>
              <p className="home-2-div-p-head">Update and Modernize</p>
              <p>
                Can specialize to specialise in updating and modernizing
                websites,
                <br />
                ensuring they not only catch eyes but also stay relevant in
                <br />
                this ever-evolving digital landscape.
              </p>
            </div>
            <div>
              <p className="home-2-div-p-head">Seamless Collaboration</p>
              <p>
                We'll keep you in the loop, providing a clear format of what
                <br />
                we need from you. It's a partnership where you're not just a
                <br />
                spectator but an integral part of the creative process.
              </p>
            </div>
            <div>
              <p className="home-2-div-p-head">Services That Speak Volumes</p>
              <p>
                Our range of services is designed to cater to your every
                <br />
                digital need:
                <br />
                <ul>
                  <li>Web Design & Maintenance</li>
                  <li>Mobile Web Design</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home 3 div*/}

      <section>
        <p className="section-header">MISSION STATEMENT</p>
        <div className="home-3-div">
          <div className="home-3-div-1">
            <p className="home-3-div-p-1">
              Our mission is to build
              <br />
              trusted relationships and
              <br />
              provide exceptional value by
              <br />
              matching clients with expert
              <br />
              web developers that deliver
              <br />
              tailored solutions and drive
              <br />
              business growth
            </p>
          </div>
          <div className="home-3-div-2">
            <img src={home1} className="home-3-div-pic-1" alt="mission" />
          </div>
        </div>
      </section>

      {/* Home 4 div */}
      <section>
        <p className="section-header">OUR SERVICES</p>
        <div className="home-4-div">
          <div>
            <p className="home-4-div-p-head">
              <span style={{ color: "black" }}>WEBSITE</span> DESIGN
            </p>
            <p className="home-4-div-p">
              We conceptualise, plan, and arrange the
              <br />
              appearance, layout, overall functionality,
              <br />
              and content of your website to ensure that
              <br />
              it's easy to use, aesthetically pleasing,
              <br />
              trustworthy, and is appropriate for the
              <br />
              target market and brand of your company.
            </p>
          </div>
          <div>
            <p className="home-4-div-p-head">
              <span style={{ color: "black" }}>WEB APP</span> DEVELOPMENT
            </p>
            <p className="home-4-div-p">
              Web apps function in-browser, are easy to
              <br />
              maintain, and can be launched quickly, playing
              <br />a crucial role in branding that mobile apps
              <br />
              can't provide. We'll help you boost your online
              <br />
              presence and customer loyalty with web apps.
            </p>
          </div>
        </div>
      </section>
      {/*Home 5 div*/}
      {/*
      <section data-aos="fade-up">
        <p className="section-header">FEATURED WORKS</p>
        <div className="home-5-div">
          <div className="home-5-div-image-holder">
            <article className="holder" data-aos="slide-left">
              <img src={home2} className="home-5-div-pic" alt="cofee" />
              <p className="home-5-div-image-title">Cofee</p>
              <a className="link" href="https://www.example.com">
                Visit Website
              </a>
            </article>
            <article className="holder">
              <img
                src={home3}
                className="home-5-div-pic"
                alt="real-estate"
                style={{ marginTop: "8%" }}
              />
              <p className="home-5-div-image-title">Real Estate Company</p>
              <a className="link" href="https://www.example.com">
                Visit Website
              </a>
            </article>
          </div>
          <div className="home-5-div-image-holder">
            <article className="holder">
              <img
                src={home4}
                className="home-5-div-pic"
                alt="bank"
                style={{ marginTop: "-8%" }}
              />
              <p className="home-5-div-image-title">Banking</p>
              <a className="link" href="https://www.example.com">
                Visit Website
              </a>
            </article>
            <article className="holder">
              <img src={home5} className="home-5-div-pic" alt="hotel" />
              <p className="home-5-div-image-title">Hotel Room</p>
              <a className="link" href="https://www.example.com">
                Visit Website
              </a>
            </article>
          </div>
        </div>
      </section>*/}
      {/* Home 6 div */}
      <section>
        <p className="section-header">PRICING</p>
        <div className="home-6-div">
          <article className="home-6-div-subdivs">
            <div className="article-head-6">
              <h1>Standard</h1>
            </div>
            <div className="article-subhead-6">
              <h3>Great for Small Business</h3>
            </div>
            {/*
            <div className="article-price">
              <h1>$297</h1>
            </div>
            <div className="article-price-def">
              <h1>per month</h1>
            </div>*/}
            <div className="article-des">
              <p>
                Perfect for small business
                <br />
                looking to establish a solid online
                <br />
                presence
              </p>
            </div>
            <hr />
            {/*
            <ul>
              <li>
                <p>Custom WebDesign</p>
              </li>
              <li>
                <p>Mobile Optimization</p>
              </li>
              <li>
                <p>Regular Maintenance Updates</p>
              </li>
              <li>
                <p>Responsive Customer Support</p>
              </li>
              <li>
                <p>Basic SEO Optimization</p>
              </li>
              <li>
                <p>Monthly Performance Reports</p>
              </li>
            </ul>
            <div>
              <button type="submit" className="lets-talk-btn">
                Let's Talk
              </button>
            </div>*/}
          </article>

          <article className="home-6-div-subdivs-active">
            <div className="article-head-6">
              <h1>Professional</h1>
            </div>
            <div className="article-subhead-6-mid">
              <h3>Most Popular Choice</h3>
            </div>
            {/*
            <div className="article-price">
              <h1>$597</h1>
            </div>
            <div className="article-price-def">
              <h1>per month</h1>
            </div>*/}
            <div className="article-des-mid">
              <p>
                Our most popular choice for
                <br />
                business aiming for growth
                <br />
                and increase visibility
              </p>
            </div>
            <hr className="hr-mid" />
            {/*
            <ul>
              <li>
                <p>All Standard Features</p>
              </li>
              <li>
                <p>Enchanced SEO Strategies</p>
              </li>
              <li>
                <p>E-commerce Integration</p>
              </li>
              <li>
                <p>Priority Technical Support</p>
              </li>
              <li>
                <p>Social Media Integration</p>
              </li>
              <li>
                <p>Bi-Weekly Performance Reports</p>
              </li>
            </ul>
            <div>
              <button type="submit" className="lets-talk-btn-active">
                Let's Talk
              </button>
            </div>*/}
          </article>

          <article className="home-6-div-subdivs">
            <div className="article-head-6">
              <h1>Enterprise</h1>
            </div>
            <div className="article-subhead-6">
              <h3>For Larger Organization</h3>
            </div>
            {/*
            <div className="article-price">
              <h1>$697</h1>
            </div>
            <div className="article-price-def">
              <h1>per month</h1>
            </div>*/}
            <div className="article-des">
              <p>
                Tailored for larger organizations
                <br />
                seeking comprehensive digital
                <br />
                solutions and strategic insights.
              </p>
            </div>
            <hr />
            {/*
            <ul>
              <li>
                <p>All Professional Features</p>
              </li>
              <li>
                <p>Advance Security Measures</p>
              </li>
              <li>
                <p>Dedicated Account Manager</p>
              </li>
              <li>
                <p>Customized Analytics & Reports</p>
              </li>
              <li>
                <p>API Integration</p>
              </li>
              <li>
                <p>Quarterly Strategy Consultations</p>
              </li>
            </ul>
            <div>
              <button type="submit" className="lets-talk-btn">
                Let's Talk
              </button>
            </div>*/}
          </article>
        </div>
        <Link to="/pricing" className="home-link">
          <button className="home-6-div-button">View Offers</button>
        </Link>
      </section>
      {/* Home 7 div */}

      <img className="circle-right" src={circle} />
      {/*
      <section>
        <p className="section-header">CLIENT TESTIMONIALS</p>
        <div className="home-7-div">
          <div className="home-7-div-1">
            <img
              src={home6client}
              className="home-7-div-client"
              alt="testimonial"
            />
          </div>
          <div className="home-7-div-2">
            <img src={home7apos} className="home-7-div-apos" alt="apos" />
            <p className="statement">
              <strong>
                What a great
                <br />
                communicator,we can
                <br />
                easily work together
              </strong>
            </p>
            <p className="lorem">
              Working with DS - Media, I have been able <br />
              to focus more time on business operations.
              <br /> From having the first call, to the
              <br /> consistent follow up's. The team made
              <br /> me feel welcomed and supported through
              <br />
              building my website out.
            </p>
            <p className="test-name">
              <strong>John V.</strong>
            </p>
            <p className="dap">Eurobake Owner</p>
          </div>
        </div>
      </section>
*/}
      <Carousel />

      <Abovefooter />
      <Footer />
    </div>
  );
};

export default Home;
