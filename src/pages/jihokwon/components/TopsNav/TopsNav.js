import React from 'react';
import './TopsNav.scss';

function TopsNav() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <img
            src="/images/jihokwon/images/Webucks.png"
            alt="logo_img"
            width={100}
          />
        </div>
        <ul className="navbar__menu">
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
