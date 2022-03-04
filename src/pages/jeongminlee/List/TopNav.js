import './TopNav.scss';
// import React from 'react';

function TopNav() {
  return (
    <nav className="nav_topnav">
      <span className="logo">WeBucks</span>
      <div className="nav_text">
        <span className="nav_span">COFFEE</span>
        <span className="nav_span">MENU</span>
        <span className="nav_span">STORE</span>
        <span className="nav_span">WHAT'S NEW</span>
      </div>
    </nav>
  );
}

export default TopNav;
