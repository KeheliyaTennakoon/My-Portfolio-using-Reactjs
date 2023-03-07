import React from "react";
import "./index.css";

function Home() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div
          className="column is-8 left-col is-align-self-center"
          style={{ paddingLeft: "100px", paddingTop: "100px" }}
        >
          <h2 className="title is-2 has-text-white">Hello I am</h2>
          <h1 className="title is-1 has-text-danger">Keheliya Tennakoon</h1>
          <br />
          <h3 className="subtitle is-3 has-text-white">
            Undergraduate - Web Developer - Freelancer
          </h3>
          <h4 className="subtitle is-4 has-text-white">
            Web developer with 3+ years of experience in designing and
            developing user interfaces,testing,debugging,and training staff
            within eCommerce technologies.Proven ability in optimizing web
            functionalities that improve data retrieval and workflow
            efficiencies.{" "}
          </h4>
        </div>
        <div className="column is-4">
          <br />
          <img className="hero-image" src="1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
