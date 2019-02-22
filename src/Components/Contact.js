import React from "react";
import "./Styling/Contact.scss";

const Contact = props => {
  return (
    <div className="contact-page">
      <div className="titles">Contact</div>
      <div className="contact-info container">
        <div class="content">
          <ul>
            <li>
              <div className="logo-background">
                <i class="fa fa-map-marker" aria-hidden="true" />
              </div>
              <span className="contact-text">
                350 Corral Hollow Road <br /> Tracy, CA 95376
              </span>
            </li>
            <li>
              <div className="logo-background">
                <i class="fa fa-phone" aria-hidden="true" />
              </div>
              <span className="contact-text">(209) 489-3367</span>
            </li>
            <li>
              <div className="logo-background">
                <i class="fa fa-envelope" aria-hidden="true" />
              </div>
              <span className="contact-text">musatarin@yahoo.com</span>
            </li>
            <li>
              <div className="logo-background">
                <i class="fa fa-globe" aria-hidden="true" />
              </div>
              <span className="contact-text">www.isotracy.org</span>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            width="500"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=islamic%20society%20of%20tracy&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
