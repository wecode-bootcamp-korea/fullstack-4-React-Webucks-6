import React, { useState, useEffect } from 'react';
import CoffeeCard from '../components/CoffeeCard/CoffeeCard';
import TopsNav from '../components/TopsNav/TopsNav';
import './List.scss';

function ListComponent() {
  const [CoffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);
  return (
    <div>
      <TopsNav />
      <ul className="menubar">
        <li>
          <p>콜드 브루 커피 ☕️ </p>
        </li>
        <li>
          <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
        </li>
      </ul>
      {CoffeeList.map(coffee => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
      <ul className="menubar">
        <li>
          <p>브루드 커피 ☕️ </p>
        </li>
        <li>
          <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
        </li>
      </ul>
    </div>
  );
}

export default ListComponent;
