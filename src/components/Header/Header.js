import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ref for search input
  const searchRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Enter pressed, searching...");
    }
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get("searchKeyword");
    console.log("Searching for:", input);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-focus the search input on page load
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <header className={`background-header header-area header-sticky ${scrolled ? "" : "top"}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <img className="image_logo" src="images/logo.png" alt="Logo" />

              {/* Search Input */}
              <div className="search-input">
                <form id="search" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search Your Service"
                    id="searchText"
                    name="searchKeyword"
                    onKeyDown={handleKeyPress}
                    ref={searchRef}  // ref added here
                    aria-label="Search"
                  />
                  <FaSearch className="searchI" />
                </form>
              </div>

              {/* Menu */}
              <ul className={`nav ${menuOpen ? "visible" : ""}`}>
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#services">Services</a></li>
                <li className="scroll-to-section"><a href="#courses">Courses</a></li>
                <li className="scroll-to-section"><a href="#events">Blogs</a></li>
              </ul>

              {/* Mobile Menu Trigger */}
              <div
                className={`menu-trigger ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                role="button"
                tabIndex={0}
              >
                <span />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
