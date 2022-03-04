import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../CoffeeCard.module.scss';

function CoffeeCard() {
  const [coffeeData, setCoffeeData] = useState([{}]);

  useEffect(() => {
    fetch('/data/listData.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setCoffeeData(res));
  }, []);

  return (
    <ul className={styles.coffeeMenuList}>
      {coffeeData.map(data =>
        data.id < 11 ? (
          <li>
            <div className={styles.coffeeImageWrap}>
              <img src={data.image} alt={data.name} />
            </div>
            <p>{data.name}</p>
          </li>
        ) : null
      )}
    </ul>
  );
}

export default CoffeeCard;
