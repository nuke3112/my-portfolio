import React from "react";

import Icon from "../../util/Icons";

import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="contact__text">
        <span className="contact__text--title title">
          Contact <br />
          Me
        </span>
      </div>
      <div className="contact__list-wrapper contact__text--social">
        <ul className="contact__list">
          <li className="contact__list-item">
            <a href="#">
              <Icon className="contact__email" name="envelop" />
              <span>jeetchauhan.designer@gmail.com</span>
            </a>
          </li>
          <li className="contact__list-item item__2">
            <a href="#">
              <Icon className="contact__linkedin" name="linkedin" />
              <span>LinkedIn</span>
            </a>
            <a href="#">
              <Icon className="contact__behance" name="behance" />
              <span>Behance</span>
            </a>
            <a href="#">
              <Icon className="contact__instagram" name="instagram" />
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
