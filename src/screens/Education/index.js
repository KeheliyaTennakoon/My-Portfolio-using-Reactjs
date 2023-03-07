import React from "react";
import "./index.css";

function Education() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div
          className="column is-7 left-col is-align-self-center"
          style={{ paddingLeft: "100px", paddingTop: "100px" }}
        >
          <h2 className="title is-2 has-text-white">
            <b>Education</b>
          </h2>
          <br />
          <h5 className="subtitle is-4 has-text-white">
            {" "}
            <b>Bachelors Degree : </b>BSc in Information Systems (Currently
            reading for my Bachelors' Degree in Information Systems at
            University of Colombo School of Computing (UCSC).) <br />
            <br />
            <b>Diplomas : </b>Higher National Diploma in Web Development - Esoft
            Metro Campus <br />
            <br />
            <b>School Education : </b>Maliyadewa Model School - Kurunegala
            Passed General Certificate of Education in Advanced Level with 2 A
            passes and 1 C pass.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Education;
