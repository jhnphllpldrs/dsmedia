import React, { useState, useEffect } from "react";
import dsmedia from "../src/images/nav/dsmedia.png";
import { BsTelephone } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../src/css/nav.css";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check if the user is at the top of the page
      if (scrollTop === 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(scrollTop > 0 && scrollTop < prevScrollTop);
      }

      setPrevScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollTop]);

  return (
    <>
      <nav id="navbar" className={isScrolled ? "" : "scrolled"}>
        <Link to="/">
          <img src={dsmedia} alt="logo" />
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              SERVICES
            </NavLink>
          </li>
          {/*
          <li>
            <NavLink to="/works" activeClassName="active">WORKS</NavLink>
          </li>*/}
          <li>
            <NavLink to="/pricing" activeClassName="active">
              PRICING
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
          </li>
        </ul>
        <Link to="/contact" className="nav-link">
          <button className="nav-btn">Book a Call</button>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
