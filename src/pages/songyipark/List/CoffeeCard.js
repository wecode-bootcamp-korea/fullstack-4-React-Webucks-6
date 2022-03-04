import React, { useEffect, useState } from 'react';

function CoffeeCard() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <section className="coffee-menu-list">
      {coffeeList.map(coffeeData => (
        <div>
          <img
            className="coffee-img"
            src={coffeeData.image}
            alt={coffeeData.name}
          />
          <div> {coffeeData.name} </div>
        </div>
      ))}
    </section>
  );
}

export default CoffeeCard;
