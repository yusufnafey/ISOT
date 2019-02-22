import React from "react";
import "./Styling/Home.scss";
import PrayerTime from "./PrayerTime";

const Home = props => {
  return (
    <div className="container">
      <PrayerTime />
      <div className="hi">hello</div>
    </div>
  );
};

export default Home;
