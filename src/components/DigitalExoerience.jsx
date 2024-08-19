// import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import image2 from "../assets/IKEPNG3.jpg";

let talk = `Let's Talk`;

const DigitalExoerience = () => {
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src={image2} alt="" width={400} />
          </div>
          <div className="column">
            <h2 className="is-size-4-mobile has-text-weight-bold mb-3">
              Digital Experience With Passion
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              sequi ad natus cupiditate laudantium tenetur?
            </p>
            <p className="mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              sequi ad natus cupiditate laudantium tenetur?
            </p>
            <div className="buttons is-flex mt-3">
              <button className="button btn is-rounded">
                {talk}
                <span className="ml-3">
                  <FaLongArrowAltRight />
                </span>
              </button>
              <button className="button is-transparent is-rounded">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalExoerience;
