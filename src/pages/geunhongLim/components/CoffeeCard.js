import React, { useEffect } from 'react';
import { useState } from 'react';

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

  console.log(coffeeData);

  return (
    <ul className="coffee-menu-list">
      {coffeeData.map(data => (
        <li>
          <div className="coffee-image-wrap">
            <img src={data.image} alt={data.name} />
          </div>
          <p>{data.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default CoffeeCard;
