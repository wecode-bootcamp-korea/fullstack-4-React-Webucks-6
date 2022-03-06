import React, { useEffect, useState } from 'react';
import './List.scss';
import TopNav from '../components/Nav/TopNav/TopNav';
import CoffeeCard from '../components/CoffeeCard/CoffeeCard';

function ListComponent() {
  const [coffeeData, setCoffeeData] = useState([{}]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(res => setCoffeeData(res));
  }, []);

  return (
    <div>
      <TopNav />

      <div className="menu-bar">
        <h3>콜드 브루 커피</h3>
      </div>
      <div className="menu">
        {coffeeData.map(data => (
          <CoffeeCard key={data.id} data={data} />
        ))}
      </div>
      <div className="menu-bar">
        <h3>콜드 브루 커피</h3>
      </div>
      <div className="menu">
        {coffeeData.map(data => (
          <CoffeeCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ListComponent;
