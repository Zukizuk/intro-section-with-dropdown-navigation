import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close-menu.svg";
import Up from "../assets/images/icon-arrow-up.svg";
import Down from "../assets/images/icon-arrow-down.svg";
import Todos from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

function Header() {
  const [active, setActive] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const closeSubMenu = (e) => {
      const navElement = document.querySelector(".nav");

      if (navElement && !navElement.contains(e.target)) {
        setFeaturesOpen(false);
        setCompanyOpen(false);
      }
    };

    document.addEventListener("click", closeSubMenu);

    return () => {
      document.removeEventListener("click", closeSubMenu);
    };
  }, []);

  function openSidebar() {
    setActive(!active);
    setFeaturesOpen(false);
    setCompanyOpen(false);
  }
  function toggleFeatures() {
    setFeaturesOpen(!featuresOpen);
    setCompanyOpen(false);
  }

  function toggleCompany() {
    setCompanyOpen(!companyOpen);
    setFeaturesOpen(false);
  }
  return (
    <header className="header">
      <img src={Logo} alt="" />
      <img
        src={active ? Close : Menu}
        alt="/"
        className="menu"
        onClick={openSidebar}
      />
      {active && (
        <div className="backdrop" onClick={() => setActive(false)}></div>
      )}
      <nav className={active ? "nav active" : "nav"}>
        <ul className="Menu__List">
          <li onClick={toggleFeatures}>
            Features{" "}
            <img src={featuresOpen ? Up : Down} className="updown" alt="" />
            {featuresOpen && (
              <ul className="Sub__Menu">
                <li>
                  <img src={Todos} alt="" />
                  Todo list
                </li>
                <li>
                  <img src={Calendar} alt="" />
                  Calendar
                </li>
                <li>
                  <img src={Reminders} alt="" />
                  Reminders
                </li>
                <li>
                  <img src={Planning} alt="" />
                  Planning
                </li>
              </ul>
            )}
          </li>
          <li onClick={toggleCompany}>
            Company{" "}
            <img src={companyOpen ? Up : Down} className="updown" alt="" />
            {companyOpen && (
              <ul className="Sub__Menu">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            )}
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="btns">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
