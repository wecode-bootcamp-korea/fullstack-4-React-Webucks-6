import React, { useState } from 'react';
import './CoffeeCard.scss';

function CoffeeCard(props) {
  let [redHeart, setRedHeart] = useState('false');
  let [emptyHeart, setEmptyHeart] = useState('true');

  let heartClick = e => {
    if (emptyHeart) {
      setEmptyHeart(false);
      setRedHeart(true);
    } else if (redHeart) {
      setEmptyHeart(true);
      setRedHeart(false);
    }
  };

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
            <span className="coffee_name">
              {props.Coffee.name}&nbsp;
              <i
                onClick={heartClick}
                className={
                  redHeart === true && emptyHeart === false
                    ? 'fa-solid fa-heart'
                    : 'fa-regular fa-heart'
                }
              />
              {/* <i class="fa-solid fa-heart" /> */}
            </span>
          </div>
        </div>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default CoffeeCard;
