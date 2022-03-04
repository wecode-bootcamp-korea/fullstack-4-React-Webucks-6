import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">WeBucks</div>
        <div className="nav-bar">
          <div>COFFEE</div>
          <div>MENU</div>
          <div>STORE</div>
          <div>WHAT'S NEW</div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
