import React from "react";
import "../css/footer.css";
import logofooter from "../images/footer/logofooter.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div className="footer-div-leftside">
          <div className="footer-div-leftside-top">
            <img src={logofooter} className="footer-logo" alt="footer-logo" />
            <p>
              Empowering Your
              <br />
              Business,Unleashing
              <br />
              Digital Potential
            </p>
          </div>
          <div className="footer-div-leftside-bottom">
            <a
              href="https://www.facebook.com/karl.delossantos.798"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="fblogo" />
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              <BsTwitter className="twitterlogo" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="instagramlogo" />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <BsGoogle className="googlelogo" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <BsYoutube className="youtubelogo" />
            </a>
            <a
              href="https://www.pinterest.ph/"
              target="_blank"
              rel="noreferrer"
            >
              <BsPinterest className="pinterestlogo" />
            </a>
          </div>
        </div>
        <div className="footer-div-rightside">
          <div className="footer-div-rightside-top">
            <p>GET IN TOUCH</p>
            <a
              className="email"
              href="mailto:help@ds-media.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              help@ds-media.co.uk
            </a>
          </div>
          <div className="footer-div-rightside-bottom">
            <p>NAVIGATE</p>
            <ul className="nav-footer">
              <li>
                <NavLink to="/" activeClassName="active-link">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active-link">
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active-link">
                  SERVICES
                </NavLink>
              </li>
              {/*
          <li>
            <NavLink to="/works" activeClassName="active-link">WORKS</NavLink>
          </li>*/}
              <li>
                <NavLink to="/pricing" activeClassName="active-link">
                  PRICING
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active-link">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="below-footer-div">
        <p className="below-footer">© 2023 DS MEDIA. All rights reserved.</p>
        <Link to="/privacypolicy" className="home-link">
          <p className="below-footer-policy">Privacy & Policy</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
