import React from "react";
import "./index.css";

function Projects() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div
          className="column is-7 left-col is-align-self-center"
          style={{ paddingLeft: "100px", paddingTop: "100px" }}
        >
          <h2 className="title is-2 has-text-white">
            <b>Projects And Awards</b>
          </h2>
          <br />
          <h5 className="subtitle is-4 has-text-white">
            {" "}
            <b>Awards and Certifications </b>
            <br />
            “Web Applications for Everbody” – Coursera Certificate <br />
            “Full-Stack Web Development with Stack” – Coursera Certificate{" "}
            <br />
            “Critical Thinking Masterclass” – MadeUpUniversity
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Projects;
