import React, { useState } from "react";

import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div></div>
      <a href="/">
        <div className={active ? "logo active" : "logo"}>
          <img
            src={require("../assets/logo.png")}
            alt="finger-tapping-lightning"
          />
        </div>
      </a>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={handleToggle}
      >
        <div className="hamburger"></div>
      </div>
      <ul className={active ? "active" : ""}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">My works</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <p>© - ai.foreach, 2020.</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
