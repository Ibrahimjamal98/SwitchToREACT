import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav id="main-nav">
      <img className="logo" src={logo}></img>
      <div className="container">
        <div className="social">
          <a href="http://facebook.com" target="_blank">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://twitter.com" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://instagram.com" target="_blank">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="http://youtube.com" target="_blank">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <ul>
          <li>
            <a className="current" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
