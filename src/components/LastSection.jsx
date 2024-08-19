import React from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";
import {
  FaLongArrowAltRight,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const project = `have a project in mind, let's get to work 👋📭`;
const LastSection = () => {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="has-text-centered">
          <h1 className="is-size-3-mobile is-size-3-desktop has-text-black is-centered">
            {project}
          </h1>
          <div className="buttons is-flex mt-3 is-centered">
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
          <div className="social-icons is-flex mt-3 has-text-centered">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default LastSection;
