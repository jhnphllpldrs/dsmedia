import React,{useEffect} from 'react'
import "../css/works.css"
import works1 from "../images/works/works1.png"
import workscomputer from "../images/works/workscomputer.png"
import worksphone from "../images/works/worksphone.png"
import { TbArrowsJoin2 } from "react-icons/tb";
import works2 from "../images/works/works2.png";
import works3 from "../images/works/works3.png";
import works4 from "../images/works/works4.png";
import works5 from "../images/works/works5.png";
import works6 from "../images/works/works6.png";
import works7 from "../images/works/works7.png";
import works8 from "../images/works/works8.png";
import works9 from "../images/works/works9.png";
import {MdOutlineDoubleArrow} from "react-icons/md";
import { Carousel } from "./Carousel";
import Abovefooter from "./abovefooter";
import Footer from "./Footer";

const Works = () => {
 
  return (
    <div className="pages">
        {/* Works 1 div*/}
      
      <section>
        <p className="section-header">OUR WORKS</p>
        <div className="works-1-div">
          <div className='works-1-div-leftside'>
            <h1>Our mission is to help<br/>your business standout</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Enim tortor ut ornare commodo orci dignissim arcu quis<br/>lorem. Viverra sed ut viverra vitae aliquam. Eu nibh libero<br/>ultrices leo est.</p>
          </div>
          <div className='works-1-div-rightside'>
            <img src={works1}/>
          </div>
        </div>
      </section>
        {/* Works 2 div*/}
        <section>
          <div className='works-2-div'>
            <div className='works-2-div-divs'>
              <div className='works-2-div-divs-pics'>
              <img src={workscomputer}/>
              </div>
              <h1>Websites</h1>
              <a>View all<TbArrowsJoin2/></a>
            </div>

            <div className='works-2-div-divs'>
            <div className='works-2-div-divs-pics'>
              <img src={worksphone}/>
              </div>
              <h1>Mobile Web</h1>
              <a>View all<TbArrowsJoin2/></a>
            </div>
          </div>
        </section>
        {/* Works 3 div*/}
        <section>
        <p className="section-header">FEATURED WORKS</p>
        <div className="works-3-div">
          <div className="works-3-div-image-holder">
            <article className="holder">
              <img src={works2} className="works-3-div-pic" alt="cofee" />
              <p className="works-3-div-image-title">Cofee</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
            <article className="holder">
              <img
                src={works3}
                className="works-3-div-pic"
                alt="real-estate"
                style={{ marginTop: "8%" }}
              />
              <p className="works-3-div-image-title">Real Estate Company</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
          </div>
          <div className="works-3-div-image-holder">
            <article className="holder">
              <img
                src={works4}
                className="works-3-div-pic"
                alt="bank"
                style={{ marginTop: "-8%" }}
              />
              <p className="works-3-div-image-title">Banking</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
            <article className="holder">
              <img src={works5} className="works-3-div-pic" alt="hotel" />
              <p className="works-3-div-image-title">Hotel Room</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
          </div>
          <div className="works-3-div-image-holder">
            <article className="holder">
              <img
                src={works6}
                className="works-3-div-pic"
                alt="bank"
                style={{ marginTop: "-8%" }}
              />
              <p className="works-3-div-image-title">Fashion and Apparel</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
            <article className="holder">
              <img src={works7} className="works-3-div-pic" alt="hotel" />
              <p className="works-3-div-image-title">Dentist Appointment</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
          </div>
          <div className="works-3-div-image-holder">
            <article className="holder">
              <img
                src={works8}
                className="works-3-div-pic"
                alt="bank"
                style={{ marginTop: "-8%" }}
              />
              <p className="works-3-div-image-title">Car Rental</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
            <article className="holder">
              <img src={works9} className="works-3-div-pic" alt="hotel" />
              <p className="works-3-div-image-title">Printing Companyt</p>
              <a className="link" href="https://www.example.com">
                Visit Website
                <MdOutlineDoubleArrow/>
              </a>
            </article>
          </div>
        </div>
      </section>
      <Carousel />
      <Abovefooter />
      <Footer />
    </div>
  )
}

export default Works