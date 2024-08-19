import React from "react";
import Image from "../assets/IKEPNG3.jpg";
// import { FaArrowCircleRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Explore = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="is-size-3-desktop is-size-4-mobile has-text-weight-bold">
          Explore My Latest Works
        </h2>
        <div className="columns mt-5">
          <div className="column">
            <img src={Image} />
            <div className="is-flex is-justify-content-space-between ">
              <div>
                <h3 className="is-size-5 has-text-black has-text-weight-bold ">
                  Energy Saver - website
                </h3>
                <p className="has-text-color-gray">web design</p>
              </div>
              <div className="mr-2">
                <button className="button is-transparent is-rounded">
                  <FaArrowRightLong color="black" size={15} />
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={Image} />
            <div className="is-flex is-justify-content-space-between ">
              <div>
                <h3 className="is-size-5 has-text-black has-text-weight-bold ">
                  Energy Saver - website
                </h3>
                <p className="has-text-color-gray">web design</p>
              </div>
              <div className="mr-2">
                <button className="button is-transparent is-rounded">
                  <FaArrowRightLong color="black" size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={Image} />
          <div className="is-flex is-justify-content-space-between ">
            <div>
              <h3 className="is-size-5 has-text-black has-text-weight-bold ">
                Energy Saver - website
              </h3>
              <p className="has-text-color-gray">web design</p>
            </div>
            <div className="mr-2">
              <button className="button is-transparent is-rounded">
                <FaArrowRightLong color="black" size={15} />
              </button>
            </div>
          </div>
        </div>
        <div className="has-text-centered">
          <button className="button btn">
            See More{" "}
            <span className="ml-3">
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explore;
