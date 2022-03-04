import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();

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
        <div className={styles.coffeeContents}>
          {lists.slice(10, 12).map(list => {
            return (
              <div className={styles.coffeeItem} key={list.id}>
                <div className={styles.coffeeImgbox}>
                  <img alt={list.name} src={`/${list.image}`} />
                </div>
                <p className={styles.coffeeName}>{list.name} ♡</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Main;
