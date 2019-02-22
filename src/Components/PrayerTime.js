import React from "react";
import "./Styling/PrayerTime.scss";

const NavBar = props => {
  return (
    <div className="prayer-container">
      <div className="prayer-box">
        <div className="prayer-name">FAJR</div>
        <div className="iqamah">6:15 AM</div>
        <div className="adhan">Adhan: 5:44 AM</div>
      </div>
      <div className="prayer-box">
        <div className="prayer-name">DHUHR</div>
        <div className="iqamah">1:30 PM</div>
        <div className="adhan">Adhan: 12:59 PM</div>
      </div>
      <div className="prayer-box">
        <div className="prayer-name">ASR</div>
        <div className="iqamah">6:00 PM</div>
        <div className="adhan">Adhan: 5:17 PM</div>
      </div>
      <div className="prayer-box">
        <div className="prayer-name">MAGHRIB</div>
        <div className="iqamah">SUNSET</div>
        <div className="adhan">Adhan: 7:07 PM</div>
      </div>
      <div className="prayer-box">
        <div className="prayer-name">ISHA</div>
        <div className="iqamah">8:30 PM</div>
        <div className="adhan">Adhan: 8:16 PM</div>
      </div>
      <div className="prayer-box">
        <div className="prayer-name">JUMMAH</div>
        <div className="iqamah">1:45 PM</div>
        <div className="adhan">Adhan: 12:58 PM</div>
      </div>
    </div>
  );
};

export default NavBar;
