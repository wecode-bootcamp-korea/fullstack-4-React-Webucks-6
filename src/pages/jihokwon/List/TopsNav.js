import React from 'react';
import './TopsNav.scss';

function TopsNav() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <img src="/images/logo.png" alt="" width="70" />
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
