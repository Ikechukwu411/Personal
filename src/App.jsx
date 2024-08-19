import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import NoPage from "./Pages/NoPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
