import './CoffeeCard.scss';

function CoffeeCard({ data }) {
  return (
    <div className="menu-box">
      <span>
        <img src={data.image} alt={data.name} />
      </span>
      <p>{data.name}</p>
    </div>
  );
}

export default CoffeeCard;
