import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import CoffeeCard from '../Main/CoffeeCard/CoffeeCard';

function Main() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setLists(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TopNav />
      <section className={styles.coffeeSection}>
        <article className={styles.titleBox}>
          <h2>콜드 브루 커피</h2>
          <span>☕️</span>
          <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
        </article>
        <article className={styles.coffeeContents}>
          {lists.slice(0, 10).map(list => {
            return <CoffeeCard key={list.id} list={list} />;
          })}
        </article>
      </section>
      <section className={styles.coffeeSection}>
        <article className={styles.titleBox}>
          <h2>브루드 커피</h2>
          <span>☕️</span>
          <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
        </article>
        <article className={styles.coffeeContents}>
          {lists.slice(10, 12).map(list => {
            return (
              <CoffeeCard
                key={list.id}
                list={list}
                // onClick={() => {
                //   navigate(`/detail-minkyoungkim/${list.id}}`);
                // }}
              />
            );
          })}
        </article>
      </section>
    </div>
  );
}

export default Main;
