import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const toggleNavbar = () => {
    document.getElementById("menu").classList.toggle("is-active");
    document.getElementById("burger").classList.toggle("is-active");
  };
  const closeNavbar = () => {
    document.getElementById("menu").classList.remove("is-active");
    document.getElementById("burger").classList.remove("is-active");
  };
  return (
    <div>
      <header className="header" id="header">
        <nav className="navbar container">
          <Link to="/" className="brand">
            Streamverse
          </Link>
          <div className="search">
            <form className="search-form">
              <input
                type="text"
                name="search"
                className="search-input"
                placeholder="Search"
                autofocus
              />
              <button type="submit" className="search-submit" disabled>
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <a
                  className="menu-link"
                  onClick={() => {
                    closeNavbar();
                  }}
                >
                  <i class='bx bx-category' ></i>
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link"
                  onClick={() => {
                    closeNavbar();
                    props.showNotifModal();
                  }}
                >
                  <i class='bx bx-bell' ></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="burger"
            id="burger"
            onClick={() => {
              toggleNavbar();
            }}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
