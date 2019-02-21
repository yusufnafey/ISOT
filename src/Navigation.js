import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="top">
        <div className="container">
          {/* <img
            className="logo"
            src={require("../images/isotLogo.png")}
            alt="isot logo"
          /> */}
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/events">Events</Link>
            <Link to="/prayer_times">Prayer Times</Link>
            <Link to="/forms">Forms</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
