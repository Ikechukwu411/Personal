import React from "react";
import Navbar from "../components/Navbar";

import DigitalExoerience from "../components/DigitalExoerience";
import Offerings from "../components/Offerings";
import LastSection from "../components/LastSection";

const servicesText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            at vitae atque quos dignissimos. Vitae facilis repudiandae
            voluptatem commodi vel.`;

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container underline_text has-text-centered">
          <h1 className="is-size-2-desktop is-size-4-mobile serviceText">
            About Us
          </h1>
        </div>
        <div className="container has-text-centered pt-5">
          <p>{servicesText}</p>
          <p>{servicesText}</p>
        </div>
      </section>
      <section
        className="section "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <DigitalExoerience />
      </section>
      <section
        className="section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="container">
          <h2 className="is-size-4 mb-5">Brands I have partnered with</h2>
          <div className="columns box mb-5">
            <p className="has-text-grey">.teamwork</p>
            <h3 className="is-size-5">Web Design</h3>
            <p className="has-text-grey">2022-2023</p>
          </div>
          <div className="columns box mb-5">
            <p className="has-text-grey">.teamwork</p>
            <h3 className="is-size-5">Content Creating</h3>
            <p className="has-text-grey">2022-2023</p>
          </div>
          <div className="columns box mb-5">
            <p className="has-text-grey">.teamwork</p>
            <h3 className="is-size-5">Mobile App</h3>
            <p className="has-text-grey">2022-2023</p>
          </div>
          <div className="columns box mb-5">
            <p className="has-text-grey">.teamwork</p>
            <h3 className="is-size-5">Search Engine Optimization</h3>
            <p className="has-text-grey">2022-2023</p>
          </div>
        </div>
      </section>
      <section
        className="section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Offerings />
      </section>
      <section
        className="section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <LastSection />
      </section>
    </React.Fragment>
  );
};

export default About;
