import React, { useEffect } from "react";
import "../css/pricing.css";
import { Carousel } from "./Carousel";
import Abovefooter from "./abovefooter";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pages">
      {/* Pricing 1 div*/}
      <section>
        <p className="section-header">PRICING</p>
        <div className="pricing-1-div">
          <h1>
            Choose Your Digital
            <br />
            Advantage
          </h1>
          <p>
            We handle your full web presence
            <br />
            design, copy, development, launch,
            <br />
            performance and maintenance - so
            <br />
            you can focus on business goals.
          </p>
        </div>
      </section>
      {/* Pricing 2 div*/}
      <section>
        <div className="pricing-2-div">
          <article className="pricing-2-div-subdivs">
            <div className="article-head-2">
              <h1>Standard</h1>
            </div>
            <div className="article-subhead-2">
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
            <div className="pricing-btn">
              <Link to="/contact" className="home-link">
                <button type="submit" className="lets-talk-btn">
                  Let's Talk
                </button>
              </Link>
            </div>
          </article>

          <article className="pricing-2-div-subdivs-active">
            <div className="article-head-2">
              <h1>Professional</h1>
            </div>
            <div className="article-subhead-2-mid">
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
            <div className="pricing-btn">
              <Link to="/contact" className="home-link">
                <button type="submit" className="lets-talk-btn-active">
                  Let's Talk
                </button>
              </Link>
            </div>
          </article>

          <article className="pricing-2-div-subdivs">
            <div className="article-head-2">
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
            <div className="pricing-btn">
              <Link to="/contact" className="home-link">
                <button type="submit" className="lets-talk-btn">
                  Let's Talk
                </button>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <Carousel />
      <Abovefooter />
      <Footer />
    </div>
  );
};

export default Pricing;
