import React, { useEffect } from "react";
import "../css/contact.css";
import { useRef } from "react";
import contact1 from "../images/contact/contact1.png";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Carousel } from "./Carousel";
import Abovefooter from "./abovefooter";
import Footer from "./Footer";

const Contact = () => {
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

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const checkboxes = document.querySelectorAll(".circle-checkbox:checked");
    const selectedCheckboxes = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );

    // Include selected checkboxes in the email message
    const message = `Selected checkboxes: ${selectedCheckboxes.join(", ")}`;

    // Create the email template data
    const templateParams = {
      name: e.target.name.value,
      from_name: e.target.companyName.value,
      message: message, // Include selected checkboxes in the message
    };

    console.log("templateParams:", templateParams);

    emailjs
      .sendForm(
        "service_9e45c9g",
        "template_hyebnhl",
        form.current,
        "n3-IKG8F-2wAgNhXs"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          window.alert("Response has been submitted.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pages">
      {/* Contact 1 div*/}
      <section>
        <div className="contact-1-div">
          <h1>
            We turn{" "}
            <span style={{ color: "#8b23f4", fontSize: "1.2em" }}>client</span>{" "}
            vision
            <br />
            into digital{" "}
            <span style={{ color: "#8b23f4", fontSize: "1.2em" }}>success</span>
            <br />
            stories
          </h1>
          <p>Contact Today</p>
        </div>
      </section>
      {/* Contact 2 div*/}
      <section>
        <div className="contact-2-div">
          <div className="contact-2-div-form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <br />
              <input
                placeholder="Your Name"
                className="main"
                type="text"
                id="name"
                name="name"
                required
              ></input>
              <br />
              <br />

              <label htmlFor="companyName">Company</label>
              <br />
              <input
                placeholder="Company Name"
                className="main"
                type="text"
                id="companyName"
                name="companyName"
                required
              ></input>
              <br />
              <br />

              <label htmlFor="contactNumber">Contact Number</label>
              <br />

              <input
                placeholder="e.g., +44 20 xxxx xxxx"
                className="main"
                type="tel"
                id="contactNumber"
                name="contactNumber"
                pattern="[+]{0,1}[0-9\s-]+"
                required
              />

              <br />
              <br />

              <label htmlFor="email">Email Address</label>
              <br />
              <input
                placeholder="help@ds-media.co.uk"
                className="main"
                type="email"
                id="email"
                name="email"
                required
              ></input>
              <br />
              <br />

              <label htmlFor="website">Business Website</label>
              <br />
              <input
                placeholder="www.dsmedia.com"
                className="main"
                type="url"
                id="website"
                name="website"
              ></input>
              <br />
              <br />

              <label>I want to get more information on:</label>
              <br />
              <label>Select all that apply.</label>
              <br />
              <br />

              <input
                className="circle-checkbox"
                type="checkbox"
                id="websiteDesign"
                name="option"
                value="Website Design"
              />
              <label className="web" htmlFor="websiteDesign">
                Website Design
              </label>
              <br />
              <input
                className="circle-checkbox"
                type="checkbox"
                id="mobileDesign"
                name="option"
                value="Mobile Design"
              />
              <label htmlFor="mobileDesign">Mobile Design</label>
              <br />
              <input
                className="circle-checkbox"
                type="checkbox"
                id="services"
                name="option"
                value="Services"
              />
              <label htmlFor="services">Services</label>
              <br />
              <input
                className="circle-checkbox"
                type="checkbox"
                id="prices"
                name="option"
                value="Prices"
              />
              <label htmlFor="prices">Prices</label>
              <br />
              <input
                className="circle-checkbox"
                type="checkbox"
                id="others"
                name="option"
                value="Others"
              />
              <label htmlFor="others">Others</label>
              <br />
              <textarea
                className="textbox"
                id="needs"
                name="needs"
                placeholder="Describe your needs:"
              ></textarea>
              <br />
              <br />

              <input className="input" type="submit" value="Send" />
            </form>
          </div>
          <div className="contact-2-div-pic">
            <img src={contact1} />
          </div>
        </div>
      </section>

      {/* Contact 2 div*/}
      <section>
        <div className="contact-3-div">
          <div className="contact-3-div-divs">
            <h1>
              Email <span style={{ color: "#8b23f4" }}>Us</span>
            </h1>
            <p>Tell us about your next project</p>
            <a href="mailto:help@ds-media.co.uk" className="home-link">
              <AiOutlineMail /> help@ds-media.co.uk
            </a>
          </div>
          <div className="contact-3-div-divs">
            <h1>
              Call <span style={{ color: "#8b23f4" }}>Us</span>
            </h1>
            <p>Direct contact us</p>
            <a href="tel:+1234567890" className="home-link">
              <BsTelephone />
              +44 7830 010463
            </a>
          </div>
          <div className="contact-3-div-divs">
            <h1>
              Visit <span style={{ color: "#8b23f4" }}>Us</span>
            </h1>
            <a
              href="https://www.google.com/maps?q=944+Chardonnay+Drive,+Tukwila,+Washington"
              target="_blank"
              className="home-link"
            >
              944 Chardonnay Drive,
              <br />
              Tukwila. Washington United
              <br />
              States
            </a>
          </div>
        </div>
      </section>
      <Abovefooter />
      <Footer />
    </div>
  );
};

export default Contact;
