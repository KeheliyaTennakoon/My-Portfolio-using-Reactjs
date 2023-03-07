import React from "react";
import "./index.css";

function AboutMe() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div
          className="column is-7 left-col is-align-self-center"
          style={{ paddingLeft: "100px", paddingTop: "100px" }}
        >
          <h2 className="title is-2 has-text-white">
            <b>About Me</b>
          </h2>
          <br />
          <h4 className="subtitle is-3 has-text-white">
            I am a web developer with 3+ years of experience in designing and
            developing user interfaces,testing,debugging,and training staff
            within eCommerce technologies.Proven ability in optimizing web
            functionalities that improve data retrieval and workflow
            efficiencies.{" "}
          </h4>
          <h5 className="subtitle is-4 has-text-white">
            Name : Keheliya Tennakoon Birthday : 26/05/2001 <br />
            Age : 21y <br />
            Address : Colombo,Sri Lanka <br />
            University : University of Colombo <br />
            Email : kauqexpnr@gmail.com <br />
            Github : @keheliyap{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
