import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-danger"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <span className="icon is-medium">
              
            </span>
            
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-dark" href="/">
                <strong>Home</strong>
              </a>
              <a className="button is-dark" href="/about">
                <strong>About Me</strong>
              </a>
              <a className="button is-dark" href="/education">
                <strong>Education</strong>
              </a>
              <a className="button is-dark" href="/projects">
                <strong>Projects And Awards</strong>
              </a>
              <a className="button is-dark" href="./contact">
                <strong>Contact Me</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
