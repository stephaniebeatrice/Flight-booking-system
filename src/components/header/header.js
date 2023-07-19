import React from "react";
import { Link } from "react-router-dom";

import "../../styles/style.css";

export const Header = () => {
  return (
    <header className="animate-search">
      <section id="bottom-section">
        <div>{/* TODO: ADD AN IMAGE HERE */}</div>
        {/* #1d94f7 */}
        <div className="col right">
          <span id="ctl00_ctBody_Web_Content_Home_Web_Header_Web_Menu_Web_menu">
            <nav id="main_nav">
              <ul>
                <li className="current-menu-item">
                  <Link style={{ textDecoration: "none" }} to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="current-menu-item">
                  <Link style={{ textDecoration: "none" }} to={"/Profile"}>
                    Profile
                  </Link>
                </li>
                <li className="has-children">
                  <Link style={{ textDecoration: "none" }} to={"/Jobs"}>
                    Jobs
                  </Link>
                </li>
                <li className="has-children">
                  <Link style={{ textDecoration: "none" }} to={"/Admin"}>
                    Admin
                  </Link>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </section>
    </header>
  );
};
