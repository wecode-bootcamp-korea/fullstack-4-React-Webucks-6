import React from 'react';
import styles from '../TopNav/TopNav.module.scss';

function TopNav() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>WeBucks</h1>
      <nav>
        <ul className={styles.menu}>
          <li>COFFEE</li>
          <li>MENU</li>
          <li>STORE</li>
          <li>WHAT'S NEW</li>
        </ul>
      </nav>
    </header>
  );
}

export default TopNav;
