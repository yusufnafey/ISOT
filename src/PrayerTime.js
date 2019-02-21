import React from "react";
// import "./PrayerTime.scss";

const NavBar = props => {
  return (
    <div className="prayer-container">
      <div className="prayer-box">FAJR 6:15 AM Adhan: 5:44 AM</div>
      <div className="prayer-box">DHUHR 1:30 PM Adhan: 12:59 PM</div>
      <div className="prayer-box">ASR 6:00 PM Adhan: 5:17 PM</div>
      <div className="prayer-box">MAGHRIB SUNSET Adhan: 7:07 PM</div>
      <div className="prayer-box">ISHA 8:30 PM Adhan: 8:16 PM</div>
      <div className="prayer-box">JUMMAH 1:45 PM Adhan: 12:58 PM</div>
    </div>
  );
};

export default NavBar;
