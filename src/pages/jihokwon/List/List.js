import React, { useState, useEffect } from 'react';
import CoffeeCard from '../components/CoffeeCard/CoffeeCard';
import TopsNav from '../components/TopsNav/TopsNav';
import './List.scss';

function ListComponent() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [brewList, setBrewList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/jihokwon/data/coldbrewCoffeeData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/jihokwon/data/brewedCoffeeData.json')
      .then(res => res.json())
      .then(data => {
        setBrewList(data);
      });
  }, []);

  return (
    <div>
      <TopsNav />
      <section className="jiho_section">
        <ul className="menubar">
          <li>
            <p>콜드 브루 커피 ☕️ </p>
          </li>
          <li>
            <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
          </li>
        </ul>
        <div className="coffee-list">
          {coffeeList.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <ul className="menubar">
          <li>
            <p>브루드 커피 ☕️ </p>
          </li>
          <li>
            <p> 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</p>
          </li>
        </ul>
        <div className="coffee-list">
          {brewList.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ListComponent;
