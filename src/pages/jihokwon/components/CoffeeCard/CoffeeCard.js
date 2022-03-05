import React from 'react';
import './CoffeeCard.scss';

function CoffeeCard({ coffee }) {
  return (
    <div>
      <section>
        <div className="card">
          <ul>
            <div className="imgs">
              <img src={coffee.image} alt="image" />
            </div>
            <li>{coffee.name} </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CoffeeCard;
