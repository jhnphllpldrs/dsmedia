import Nav from "./Nav";
import React, { useEffect } from "react";
import "../src/css/app.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Works from "../src/components/Works";
import Pricing from "../src/components/Pricing";
import Contact from "../src/components/Contact";
import WorksInner from "../src/components/WorksInner";
import Privacypolicy from "./components/privacypolicy";
import ScrollToTopButton from "./components/scrollToTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // RequestAnimationFrame to ensure scrolling happens after rendering
    requestAnimationFrame(scrollToTop);
  }, [location.pathname]);

  return (
    <>
    
        <Nav/>
        <ScrollToTopButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/worksinner" element={<WorksInner />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />

      </Routes>
    </>
  );
}

export default App;
