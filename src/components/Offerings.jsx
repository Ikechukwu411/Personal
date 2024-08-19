import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./Offerings.css";
import Image4 from "../assets/IKEPNG2.png";

const Offerings = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const firstChange = () => {
    setActive(!active);
  };
  const secondChange = () => {
    setOpen(!open);
  };
  const thirdChange = () => {
    setExpand(!expand);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="mb-5">
          <h2 className="is-size-4-mobile is0size-3-desktop has-text-weight-bold">
            My Offerings for You
          </h2>
        </div>
        <div className="contents mt-5">
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="is-size-5 has-text-weight-bold">Web Design</h1>
            </div>
            <div className="column is-half has-text-centered">
              <div className={`is-size-6 ${active ? "hide" : "show"}`}>
                <p className="is-size-6">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className={`is-size-6 ${active ? "show" : "hide"}`}>
                <img src={Image4} alt="" width={250} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              className="column ml-5 has-text-centered is-one-fifth"
              onClick={firstChange}
            >
              {active ? <FaMinus size={25} /> : <FaPlus size={25} />}
            </div>
          </div>
          <hr className="colorHr" />
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="is-size-5 has-text-weight-bold">
                Graphics Design
              </h1>
            </div>
            <div className="column is-half has-text-centered">
              <div className={`is-size-6 ${open ? "hide" : "show"}`}>
                <p className="is-size-6">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className={`is-size-6 ${open ? "show" : "hide"}`}>
                <img src={Image4} alt="" width={250} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              className="column ml-5 has-text-centered is-one-fifth"
              onClick={secondChange}
            >
              {active ? <FaMinus size={25} /> : <FaPlus size={25} />}
            </div>
          </div>
          <hr className="colorHr" />
          <div className="columns is-mobile">
            <div className="column">
              <h1 className="is-size-5 has-text-weight-bold">Web Design</h1>
            </div>
            <div className="column is-half has-text-centered">
              <div className={`is-size-6 ${expand ? "hide" : "show"}`}>
                <p className="is-size-6">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className={`is-size-6 ${expand ? "show" : "hide"}`}>
                <img src={Image4} alt="" width={250} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              className="column ml-5 has-text-centered is-one-fifth"
              onClick={thirdChange}
            >
              {active ? <FaMinus size={25} /> : <FaPlus size={25} />}
            </div>
          </div>
          <hr className="colorHr" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offerings;
