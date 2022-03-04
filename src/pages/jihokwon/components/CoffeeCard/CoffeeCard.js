import React from 'react';
import './CoffeeCard.scss';

function CoffeeCard({ coffee }) {
  return (
    <div>
      <section>
        <div className="coffee-list">
          <ul>
            <div className="imgs">
              <img src={coffee.image} alt="image" />
            </div>
            <li>{coffee.name} </li>
          </ul>
        </div>
      </section>

      {/* 
        <div className="oneLine">
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/icecoffee.jpg" alt="" />
            </div>
            <li>아이스 커피</li>
          </ul>
          <ul>
            <div className="imgs">
              <img src="images/jihokwon/images/americano.jpg" alt="" />
            </div>
            <li>오늘의 커피</li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}

export default CoffeeCard;
