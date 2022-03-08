import React from 'react';
import './CoffeeCard.scss';

function CoffeeCard(props) {
  return (
    <div className="CoffeeCard">
      <div className="menu">
        <div key={props.Coffee.id} className="explain">
          <div className="coffee">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src={props.Coffee.image}
            />
            <span className="coffee_name">{props.Coffee.name}</span>
          </div>
        </div>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default CoffeeCard;
