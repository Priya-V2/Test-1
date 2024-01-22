import React from "react";

const socialMediaLogo = ["logo-instagram", "logo-facebook", "logo-twitter"],
  navList = [
    {
      name: "Account",
      navListItem: ["Create account", "Sign in", "Android app", "iOS app"],
    },
    {
      name: "Company",
      navListItem: [
        "About Omnifood",
        "For Business",
        "Cooking partners",
        "Careers",
      ],
    },
    {
      name: "Resources",
      navListItem: [
        "Recipe directory",
        "Help center",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
  ];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-5-cols footer-grid">
        <div className="logo-section">
          <a href="#">
            <img
              className="logo"
              src="img/omnifood-logo.png"
              alt="Omnifood logo"
            />
          </a>
          <ul className="logo-list">
            {socialMediaLogo.map((data, index) => {
              return (
                <li className="logo-item" key={index}>
                  <a className="logo-link" href="#">
                    <ion-icon
                      className="logo-social-media"
                      name={data}
                    ></ion-icon>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="copyright">
            Copyright &copy; 2024 by Omnifood, Inc. All rights reserved.
          </p>
        </div>

        <div className="address">
          <p className="footer-heading">Contact us</p>
          <address>
            <p className="address">
              623 Harrison St., 2nd Floor, San-Francisco, CA 94107
            </p>
            <p className="contact">415-201-6370</p>
            <p className="contact">hello@omnifood.com</p>
          </address>
        </div>
        {navList.map((data, navIndex) => {
          let { name, navListItem } = data;
          let idName = `nav-${name}`;
          return (
            <nav className="nav-footer" id={idName} key={navIndex}>
              <p className="footer-heading">{name}</p>
              <ul className="footer-list-1">
                {navListItem.map((item, index) => {
                  return (
                    <li className="footer-list" key={index}>
                      <a className="footer-li-item" href="#">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          );
        })}
      </div>
    </footer>
  );
}
