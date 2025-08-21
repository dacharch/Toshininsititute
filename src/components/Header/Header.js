import React from "react";
import "./Header.css"

function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/" className="logo">
                <h1>Scholar</h1>
              </a>


              {/* Menu */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#courses">Courses</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#team">Team</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#events">Events</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>

              {/* Mobile Menu Trigger */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
