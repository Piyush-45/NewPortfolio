import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../images/home f.png";
import aboutIcon from "../images/about green.png";
import servicesIcon from "../images/code f.png";
import contactIcon from "../images/mail.png";
import blogIcon from "../images/blog green.png";
import appdev from "../images/app.png"
import web from "../images/web.png"

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="icon home ">
        <div className="tooltip">Home</div>
        <Link to="/">
          <span>
            <img src={homeIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon about">
        <div className="tooltip">About</div>
        <Link to="/about">
          <span>
            <img src={aboutIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon services">
        {/* <div className="tooltip"></div> */}
        <div className="tooltip">Services</div>
        <Link to="/services">
          <span>
            <img src={servicesIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon blogs">
        <div className="tooltip">Blogs
        </div>
        <Link to="/blogs">
          <span>
            <img src={blogIcon} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon contact">
        <div className="tooltip">Web Projects</div>
        <Link to="/portfolio">
          <span>
            <img src={web} alt="" />
          </span>
        </Link>
      </div>
      <div className="icon contact">
        <div className="tooltip">App Projects</div>
        <Link to="/apps">
          <span>
            <img src={appdev} alt="" />
          </span>
        </Link>
      </div>

      <div className="icon contact">
        <div className="tooltip">Contact</div>
        <Link to="/contact">
          <span>
            <img src={contactIcon} alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
