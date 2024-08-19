import React from "react";
import Navbar from "../components/Navbar";
import "./Services.css";
import { SiAdobephotoshop } from "react-icons/si";
import { SiBrandfolder } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { RiPagesFill } from "react-icons/ri";
import { FaItchIo } from "react-icons/fa";
import LastSection from "../components/LastSection";

const servicesText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            at vitae atque quos dignissimos. Vitae facilis repudiandae
            voluptatem commodi vel.`;

const Services = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container underline_text has-text-centered">
          <h1 className="is-size-2-desktop is-size-4-mobile serviceText">
            Services
          </h1>
        </div>
        <div className="container has-text-centered pt-5">
          <p>{servicesText}</p>
          <p>{servicesText}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="is-size-4-mobile is-size-3-desktop has-text-weight-bold mb-5">
            My Offerings for You
          </h2>
          <div className="columns is-mobile">
            <div className="column box has-text-centered">
              <SiBrandfolder color="orange" size={45} />
              <h2 className="has-text-weight-bold ">Brand Identity</h2>
              <p className="textcolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="column box has-text-centered">
              <SiAdobephotoshop color="purple" size={45} />
              <h2 className="has-text-weight-bold ">Logo Design</h2>
              <p className="textcolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="column box has-text-centered mb-3">
              <IoLogoJavascript color="blue" size={45} />
              <h2 className="has-text-weight-bold  ">Web Design</h2>
              <p className="textcolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column box has-text-centered">
              <FaMobileScreenButton color="orange" size={45} />
              <h2 className="has-text-weight-bold ">Mobile App</h2>
              <p className="textcolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="column box has-text-centered">
              <RiPagesFill color="purple" size={45} />
              <h2 className="has-text-weight-bold ">Landing Page</h2>
              <p className="textcolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="column box has-text-centered">
              <FaItchIo color="blue" size={45} />
              <h2 className="has-text-weight-bold ">Illustration</h2>
              <p className="textcolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <LastSection />
      </section>
    </React.Fragment>
  );
};

export default Services;
