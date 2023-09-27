// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Restaurant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./add">
                Add
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="sign">
                <Link className="nav-link" to="./sign_in">
                  sign in
                </Link>
              </li>
              <li className="nav-item" id="sign">
                <Link className="nav-link">
                  /
                </Link>
              </li>
              <li className="nav-item" id="sign">
                <Link className="nav-link" to="./sign_up">
                  sign up
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
