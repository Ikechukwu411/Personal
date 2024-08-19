import React from "react";
import { Link } from "react-router-dom";
import "./NoPage.css";
import NotFound from "../assets/404-error-with-landscape-concept-illustration_114360-7898.jpg";

const NoPage = () => {
  return (
    <React.Fragment>
      <section className="section nopage">
        <div className="container has-text-centered">
          <img src={NotFound} alt="not-found" />
          <p className="is-size-5-desktop  ">Not Found 🥹</p>
          <Link to="/">Back To Hompage</Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NoPage;
