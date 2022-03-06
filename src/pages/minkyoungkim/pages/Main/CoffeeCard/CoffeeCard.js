import React from 'react';
import styles from '../CoffeeCard/CoffeeCard.module.scss';
import { useNavigate } from 'react-router-dom';

function CoffeeCard({ list }) {
  const navigate = useNavigate();
  console.log(list);

  return (
    <div
      className={styles.coffeeItem}
      key={list.id}
      onClick={() => {
        navigate(`/detail-minkyoungkim/${list.id}`);
      }}
    >
      <div className={styles.coffeeImgbox}>
        <img alt={list.name} src={`/${list.image}`} />
      </div>
      <p className={styles.coffeeName}>{list.name} ♡</p>
    </div>
  );
}

export default CoffeeCard;
