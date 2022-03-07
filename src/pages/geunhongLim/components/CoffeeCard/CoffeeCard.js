import { useState } from 'react';
import styles from './CoffeeCard.module.scss';

function CoffeeCard({ data }) {
  const [color, setColor] = useState('gray');

  const handleColor = event => {
    console.log(event);
    event.target.style.color === 'red' ? setColor('gray') : setColor('red');
  };

  return (
    <li className={styles.coffeeList}>
      <div className={styles.coffeeImageWrap}>
        <img src={data.image} alt={data.name} />
      </div>
      <span>{data.name}</span>
      <i
        className="fa-solid fa-heart"
        style={{ color: color }}
        onClick={event => {
          handleColor(event);
        }}
      />
    </li>
  );
}
export default CoffeeCard;
