import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png"
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import { authActions } from "../../store/authSlice";

export const Header = () => {
  const user = useSelector(state => state.authReducer.user);
  // const dispatch = useDispatch();
  // dispatch(authActions.logout());
  const navigation = useNavigate();
  return (
    <header className="animate-search">
      <section id="bottom-section">
        <div className="logo"> <img src={logo} alt="Logo" height={"100px"} width={"100px"}
         style={{position: "absolute", top: "0", left: "0", padding: "10px",marginLeft: "20px" }}/>
        <h1  style={{position: "absolute", top: "0", left: "0", padding: "20px", marginLeft: "100px", textTransform: "uppercase", color: "#073e79", fontFamily: "open sans"}}> 
        The Flyest Corp</h1> 
         </div>
        {/* #1d94f7 */}
        {user ? (
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
                    <Link style={{ textDecoration: "none" }} to={"/Bookings"}>
                      Bookings
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
        ) : (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", padding: ".2rem 0rem" }}>
            <Button onClick={() => navigation("/Login")} style={{ margin: "0rem .8rem" }}>
              Login
            </Button>
            <Button onClick={() => navigation("/SignUp")} style={{ margin: "0rem .8rem" }}>
              Register
            </Button>
          </div>
        )}
      </section>
    </header>
  );
};
