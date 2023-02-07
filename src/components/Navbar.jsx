import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/home">
        <a className="navbar-brand logo" href="#">
          <img src={logo} alt="logo" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/home">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <a className="nav-link" href="#">
                About Us
              </a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <div className="dropdown-menu m">
              <Link to="/Express">
                <a className="dropdown-item text-dark" href="#">
                  Express courier
                </a>
              </Link>
              <Link to="/printing">
                <a className="dropdown-item text-dark" href="#">
                  Printing
                </a>
              </Link>
              <Link to="/Enveloping">
                <a className="dropdown-item text-dark" href="#">
                  Enveloping
                </a>
              </Link>
              <Link to="/Field">
                <a className="dropdown-item text-dark" href="#">
                  Field Investigation
                </a>
              </Link>
              <Link to="/Mailing">
                <a className="dropdown-item text-dark" href="#">
                  Mass Mailing
                </a>
              </Link>

              <Link to="/InterBranch">
                <a className="dropdown-item text-dark" href="#">
                  Inter Branch Couriering
                </a>
              </Link>
              <Link to="/Electronic">
                <a className="dropdown-item text-dark" href="#">
                  Electronic Statements
                </a>
              </Link>
              <Link to="/cash">
                <a className="dropdown-item text-dark" href="#">
                  Cash collection
                </a>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/Clients">
              <a className="nav-link" href="#">
                Our Clients
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Our Branches
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Join Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;