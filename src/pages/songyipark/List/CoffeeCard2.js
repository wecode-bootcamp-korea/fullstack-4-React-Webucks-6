import React, { useEffect, useState } from 'react';

function CoffeeCard2() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/songyipark/listData2.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <section className="coffee-menu-list">
      {coffeeList.map(coffeeData => (
        <div key={coffeeData.id}>
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

export default CoffeeCard2;
