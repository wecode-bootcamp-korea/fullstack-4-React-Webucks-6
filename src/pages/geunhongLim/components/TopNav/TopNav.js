import styles from './Nav.module.scss';

function Nav() {
  return (
    <header>
      <div className={styles.headerWrap}>
        <figure className={styles.ghLogo}>
          <img src="images/logo.png" alt="logo" className={styles.ghImg} />
        </figure>
        <nav className={styles.menuNavBar}>
          <ul className={styles.ghUl}>
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
