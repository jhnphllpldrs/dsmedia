import React from "react";
import "../css/privacypolicy.css";
import Footer from "./Footer";

const Privacypolicy = () => {
  return (
    <>
      <div className="privacypolicy-div">
        <h2 className="head" >
          <span style={{ color: "#8b23f4" }}>Privacy</span> Policy
        </h2>

        <p>
          Welcome to DS-Media, where we specialize in website development
          services. At DS-Media, we prioritize the privacy and security of our
          clients and users. Please take a moment to review our privacy policy.
        </p>
        <h1>Collection and Usage of Data</h1>
        <p>
          At DS-Media, we understand the unique nature of each business entity's
          workflows, models, and systems. We do not engage in the collection of
          unnecessary data and are committed to the confidentiality of any
          information shared with us. We may collect user data through our
          website or other communication channels, especially during inquiries
          and messages voluntarily sent to us. This information is used solely
          for the purpose of providing and improving our website development
          services.
        </p>
        <h1>Newsletter and Marketing Activities</h1>
        <p>
          Unlike some other platforms, DS-Media does not engage in newsletters,
          blogs, or additional marketing activities. We do not automatically
          subscribe users to any information dissemination programs. We only use
          contact information provided during registration for essential
          communication related to website development projects.
        </p>
        <h1>Third-Party Sharing</h1>
        <p>
          DS-Media does not share any user information with third parties. Your
          data remains confidential and is used exclusively for the purpose of
          delivering our website development services.
        </p>
        <h1>User Control and Review</h1>
        <p>
          Clients and users of DS-Media have the ability to review
          the information they have shared with us through their account
          information. Thank you for choosing DS-Media. If you have
          any questions or concerns regarding our privacy policy, please contact
          us at DS-Media. Your privacy and trust are of utmost
          importance to us.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacypolicy;
