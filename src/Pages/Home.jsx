import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import "../components/Home.css";
import DigitalExoerience from "../components/DigitalExoerience";
import Explore from "../components/Explore";
import Offerings from "../components/Offerings";
import LastSection from "../components/LastSection";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section heroSection">
        <Herosection />
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="section"
      >
        <DigitalExoerience />
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="section"
      >
        <Explore />
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="section"
      >
        <Offerings />
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="section"
      >
        <LastSection />
      </section>
    </React.Fragment>
  );
};

export default Home;
