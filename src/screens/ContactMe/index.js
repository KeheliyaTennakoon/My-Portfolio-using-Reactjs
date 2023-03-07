import React from "react";
import "./index.css";

function ContactMe() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div
          className="column is-7 left-col is-align-self-center"
          style={{ paddingLeft: "100px", paddingTop: "100px" }}
        >
          <h2 className="title is-2 has-text-white">
            <b>Contact Me</b>
          </h2>
          <br />
          <h5 className="subtitle is-4 has-text-white">
            <b>Phone : </b> 071-7171717 <br />
            <b>Mail : </b>kauqexpnr@gmail.com <br />
            <b>Facebook : </b>Kauqex Pnrqon <br />
            <b>Linkedin : </b>KauqexPM
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
