import React from "react";
import "../styles/Footer.css";
import img7 from "../assets/images/logo_light.png";

function Footer() {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <img src={img7} alt="NewsGrid"></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum
            vitae.
          </p>
        </div>
        <div>
          <h3>Email Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form>
            <input type="email" placeholder="Enter Email..." />
            <input
              type="submit"
              value="Subscribe"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Join Our Club</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nesciunt!
          </p>
          <a href="#" className="btn btn-secondary">
            Join Now
          </a>
        </div>
        <div>
          <p>Copyright &copy; 2019, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
