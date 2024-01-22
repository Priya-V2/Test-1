import React from "react";
import ReactDOM from "react-dom/client";

const navHead = ["How it works", "Meals", "Testimonials", "Pricing"];
// const btnNavEl = document.querySelector(".btn-mobile-nav"),
//   headerEl = document.querySelector(".header");

export default function Nav() {
  return (
    <div className="nav-div">
      <header className="header">
        <img src="img/omnifood-logo.png" alt="omnifood logo" className="logo" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            {navHead.map((data, index) => {
              return (
                <li key={index}>
                  <a href="#" className="main-nav-link" key={index}>
                    {data}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="#" className="main-nav-link nav-cta">
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <ion-icon
            className="icon-mobile-nav"
            name="menu-outline"
            style={{ width: "4.8rem", height: "4.8rem", color: "#333" }}
          ></ion-icon>
        </button>
        {document.addEventListener("DOMContentLoaded", function () {
          const btnNavEl = document.querySelector(".btn-mobile-nav");
          const headerEl = document.querySelector(".header");

          btnNavEl.addEventListener("click", function () {
            console.log("clicked");
            headerEl.classList.toggle("nav-open");
          });
        })}
      </header>
    </div>
  );
}
