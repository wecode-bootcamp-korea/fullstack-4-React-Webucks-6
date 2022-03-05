import styles from './CoffeeCard.module.scss';

function CoffeeCard({ data }) {
  return (
    <li className={styles.coffeeList}>
      <div className={styles.coffeeImageWrap}>
        <img src={data.image} alt={data.name} />
      </div>
      <p>{data.name}</p>
    </li>
  );
}
export default CoffeeCard;
