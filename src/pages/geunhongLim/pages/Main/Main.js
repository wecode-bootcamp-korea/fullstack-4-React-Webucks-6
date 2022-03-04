import Nav from '../../components/Nav/Nav';
import CoffeeCardCold from '../../components/CoffeeCard/CoffeeCardCold/CoffeeCardCold';
import CoffeeCardBrewd from '../../components/CoffeeCard/CoffeeCardBrewd/CoffeeCardBrewd';
import styles from './Main.module.scss';

function Main() {
  return (
    <div>
      <Nav />

      <section className="coffee-menu-section">
        <article className={styles.coffeeTitle}>
          <h3>콜드 브루 커피</h3>
          <i className="fa-solid fa-mug-hot"></i>
          <span className="option-explan">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </article>
        <CoffeeCardCold />
      </section>
      <section className="coffee-menu-section">
        <article className={styles.coffeeTitle}>
          <h3>브루드 커피</h3>
          <i className="fa-solid fa-mug-hot"></i>
          <span className="option-explan">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </article>
        <CoffeeCardBrewd />
      </section>
    </div>
  );
}

export default Main;
