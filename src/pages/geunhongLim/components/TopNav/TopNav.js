import styles from './Nav.scss';

function Nav() {
  return (
    <header>
      <div className={styles.headerWrap}>
        <figure className={styles.logo}>
          <img src="images/logo.png" alt="logo" />
        </figure>
        <nav className={styles.menuNavBar}>
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
