import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeCard({ listData }) {
  return (
    <div className="list-wrapper">
      <Link to="/detail-songyipark">
        <img className="coffee-img" src={listData.image} alt={listData.name} />
      </Link>
      <div> {listData.name} </div>
    </div>
  );
}

export default CoffeeCard;
