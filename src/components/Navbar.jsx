import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navBarData = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Works",
      path: "/works",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <React.Fragment>
      <nav className="navbar is-fixed-top boxShadow">
        <div className="container">
          <div className="navbar-brand">
            <Link
              className="navbar-item  is-size-5-mobile is-size-5-desktop"
              to="/"
            >
              <span className="has-text-black">Paul</span>
              <span className="has-text-gray ml-1">Ikenna</span>
            </Link>
            <a
              className="navbar-burger"
              onClick={() => {
                setActive(!active);
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div
            className={`navbar-menu ${
              active ? "is-active" : ""
            } has-background-white`}
          >
            <div className="navbar-end">
              {navBarData.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    className="navbar-item custom-hover has-text-black"
                    key={index}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button className="navbar-item is-small button is-rounded ml-3">
                lets talk
                <span className="ml-2">
                  <FaLongArrowAltRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
