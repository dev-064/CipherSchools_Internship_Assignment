import React from "react";
import "./Navbar.css";
const Navbar = () => {
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
      <header class="header" id="header">
        <nav class="navbar container">
          <a href="#" class="brand">
            Streamverse
          </a>
          <div class="search">
            <form class="search-form">
              <input
                type="text"
                name="search"
                class="search-input"
                placeholder="Search"
                autofocus
              />
              <button type="submit" class="search-submit" disabled>
                <i class="bx bx-search"></i>
              </button>
            </form>
          </div>
          <div class="menu" id="menu">
            <ul class="menu-inner">
              <li class="menu-item">
                <a
                  href="#"
                  class="menu-link"
                  onClick={() => {
                    closeNavbar();
                  }}
                >
                  Categories
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="#"
                  class="menu-link"
                  onClick={() => {
                    closeNavbar();
                  }}
                >
                  Profile
                </a>
              </li>
              <li class="menu-item">
                <a
                  href="#"
                  class="menu-link"
                  onClick={() => {
                    closeNavbar();
                  }}
                >
                  Notif
                </a>
              </li>
            </ul>
          </div>
          <div
            class="burger"
            id="burger"
            onClick={() => {
              toggleNavbar();
            }}
          >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
