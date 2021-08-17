import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";
import DropDown from "./Dropdown";

import "../styles/components/Navigation.scss";

const Navigation = () => {
  const [nav, setNav] = useState([
    // { name: "TAS", link: "/"},
    { name: "Home", link: "/", clicked: false },

    {
      name: "Register Student",
      link: "/registerstudents",
      icon: "fas fa-caret-down",
    },

    { name: "All Students", link: "/studenst" },

    {
      name: "Attendance",
      link: "/attendance",
      icon: "fas fa-caret-down",
    },

    { name: "Contact Us", link: "/contactus" },
    { name: "Photocard", link: "/photocard" },

  ]);

  const [hamm, setHam] = useState(false);
  const [value, setValue] = useState("");

  const [click, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!value) {
        setValue("green fix-bar");
        // setTextColor('black')
      }
    } else {
      if (value) {
        setValue("");
        // setTextColor('white')
      }
    }
  };

  const toggle = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <div className={`Navigation ${value}`}>
      <div className={`nav-cont`}>
        <div className="navs-holder" style={{ background: "transparent" }}>
          <div className="top-side">
            <p>info@negst.com.ng</p>
            <p>33, Oran Street, Off Nouakchott Street, Wuse Zone 1. Abuja.</p>
          </div>

          <div className="bottom-side">
            <div className="menu-icon" onClick={toggle}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>

            <ul className={click ? 'nav-list active' : 'nav-list'} style={{ top: hamm && "0px" }}>
              <li
                className="drop-hold"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // to={nav.link}
              >
                <Link to={"/home"} className="nav-links" onClick={closeMobileMenu}>
                  <p>{nav[0].name}</p>
                </Link>
              </li>


              <li
                className="drop-hold"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // to={nav.link}
              >
                <Link to={"/registerstudent"} className="nav-links" onClick={closeMobileMenu}>
                  <p>{nav[1].name}</p>
                </Link>
              </li>



              <li
                className="drop-hold"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // to={nav.link}
              >
                <Link to={"/students"} className="nav-links" onClick={closeMobileMenu}>
                  <p>{nav[2].name}</p>
                </Link>
              </li>

              <li
                className="drop-hold"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // to={nav.link}
              >
                <Link to={"/attendance"} className="nav-links" onClick={closeMobileMenu}>
                  <p>{nav[3].name}</p>
                </Link>
              </li>

              <li
                className="drop-hold"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // to={nav.link}
              >
                <Link to={"/photocard"} className="nav-links" onClick={closeMobileMenu}>
                  <p>{nav[5].name}</p>
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="logo-holder">
          <Logo color={"white"} />
        </div>
      </div>
    </div>
  );
};


export default Navigation;
