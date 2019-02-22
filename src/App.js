import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/donate" component={Donate} /> */}
        {/* <Route path="/events" component={Events} /> */}
        {/* <Route path="/prayer_times" component={PrayerTimes} />  */}
        {/* <Route path="/forms" component={Forms} />  */}
      </div>
    );
  }
}

export default App;
