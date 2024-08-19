import "./Herosection.css";
// import { FaLongArrowAltRight } from "react-icons/fa";
import {
  FaLongArrowAltRight,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import Image from "../assets/IKEPNG2.png";

const me = `It's, Paul Ikenna.`;
const hero_subtext = `Welcome to my corner, i'm Paul Ikenna, a creative Web developer, 
       with two years experience crafting digital experiences that are both stunning and user friendly`;

const Herosection = () => {
  return (
    <>
      <div className="container">
        <div className="social-icons is-flex">
          <a
            href="https://facebook.com"
            className="icon is-size-4 mx-2"
            aria-label="Facebook"
          >
            <FaFacebook color="black" />
          </a>
          <a
            href="https://github.com"
            className="icon is-size-4 mx-2"
            aria-label="GitHub"
          >
            <FaGithub color="black" />
          </a>
          <a
            href="https://linkedin.com"
            className="icon is-size-4 mx-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin color="black" />
          </a>
          <a
            href="https://wa.me/your-number"
            className="icon is-size-4 mx-2"
            aria-label="WhatsApp"
          >
            <FaWhatsapp color="black" />
          </a>
        </div>
        <div className="columns">
          <div className="column is-hidden-desktop" data-aos="fade-left">
            <img src={Image} alt="background_image" width={400} />
          </div>
          <div className="column">
            <div className="icons"></div>
            <h1 className="title is-size-1-desktop is-size-3-mobile has-text-black ">
              <span>👋</span>
              <span className="ml-3 ">
                Hey, there,
                <br />
                <span className="ike">{me}</span>
              </span>
            </h1>
            <p className="paragraph_Text is-size-5-mobile"> {hero_subtext}</p>
            <div className="buttons is-flex mt-3">
              <button className="button btn is-rounded">
                Say Hello
                <span className="ml-3">
                  <FaLongArrowAltRight />
                </span>
              </button>
              <button className="button is-transparent is-rounded">
                My Portfolio
              </button>
            </div>
          </div>
          <div className="column is-hidden-mobile">
            <img src={Image} alt="background_image" width={400} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
