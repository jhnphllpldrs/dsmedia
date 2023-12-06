import React,{useEffect} from "react";
import "../css/abovefooter.css";
import { FaArrowRightLong } from "react-icons/fa6";
import abovefooterbot from "../images/footer/abovefooterbot.png";
import { Link } from "react-router-dom";


const abovefooter = () => {
 
  return (
    <div className="abovefooter-div">
      <div className="abovefooter-div-top">
        <div className="abovefooter-div-1">
          <p className="abovefooter-div-1-p-head" >LET'S TALK ABOUT YOUR BUSINESS</p>
          <p className="abovefooter-div-1-p-content" >
            Ready to elevate your <br />
            business with a powerful
            <br />
            digital makeover?
          </p>
        </div>
        <div className="abovefooter-div-2">
          <Link to="/contact" className="abovefooter-link">
          <div className="abovefooter-div-2-circle">
            BOOK A MEETING <FaArrowRightLong className="above-div-2-circle-icon" />
          </div></Link>
        </div>
      </div>
      <div className="abovefooter-div-bot">
        <img src={abovefooterbot} className="abovefooter-div-bot-pic" alt="cofee" />
      </div>
    </div>
  );
};

export default abovefooter;
