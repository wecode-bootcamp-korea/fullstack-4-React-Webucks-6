import React, { useEffect } from 'react';
import { useState } from 'react';
import Nav from '../../components/TopNav/TopNav';
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';
import styles from './Main.module.scss';

function Main() {
  const [coffeeColdData, setCoffeeColdData] = useState([{}]);
  const [coffeeBrewdData, setcoffeeBrewdData] = useState([{}]);

  useEffect(() => {
    fetch('/data/geunhong/coffeecold.json')
      .then(res => res.json())
      .then(res => setCoffeeColdData(res));
  }, []);

  useEffect(() => {
    fetch('/data/geunhong/coffeebrewd.json')
      .then(res => res.json())
      .then(res => setcoffeeBrewdData(res));
  }, []);

  return (
    <div>
      <Nav />

      <section className="coffee-menu-section">
        <article className={styles.coffeeTitle}>
          <h3>콜드 브루 커피</h3>
          <i className="fa-solid fa-mug-hot" />
          <span className="option-explan">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </article>

        <ul className={styles.coffeeMenuList}>
          {coffeeColdData.map(data => (
            <CoffeeCard key={data.id} data={data} />
          ))}
        </ul>
      </section>
      <section className="coffee-menu-section">
        <article className={styles.coffeeTitle}>
          <h3>브루드 커피</h3>
          <i className="fa-solid fa-mug-hot" />
          <span className="option-explan">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </article>
        <ul className={styles.coffeeMenuList}>
          {coffeeBrewdData.map(data => (
            <CoffeeCard key={data.id} data={data} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;
