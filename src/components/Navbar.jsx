import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  let releaseVersion = "v1.2";
  let releaseNote = `https://github.com/pers-ltcuong/employment-history/releases/tag/release_${releaseVersion}`;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <span>
            <img src={process.env.PUBLIC_URL + "/favicon_io/apple-touch-icon.png"} alt="MyCareer Logo" width="auto" height="40" />
          </span>
          <span 
            className="release-version" 
            onClick={() => window.open(releaseNote, "_blank")}>
            {releaseVersion}
          </span>
        </a>
        
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {['Hero', 'About', 'Education', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
