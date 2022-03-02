import React from "react";
import "./TopsNav.scss";

function TopsNav() {
  return (
    <div>
      <div className="navbar">
        <div>
          <img src="/images/WeBucks.png" alt="" width="70" />
        </div>
        <ul class="navbar__menu">
          <li>COFFEE</li>
          <li>MENU</li>
          <li>STORE</li>
          <li>WHAT'NEW</li>
        </ul>
      </div>
    </div>
  );
}

export default TopsNav;
