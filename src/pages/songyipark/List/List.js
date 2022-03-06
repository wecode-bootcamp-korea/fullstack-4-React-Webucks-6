import React, { useEffect, useState } from 'react';
import './List.scss';
import Nav from '../Component/Nav/Nav';
import CoffeeCard from './CoffeeCard';

function List() {
  const [coffeeList, setCoffeeList] = useState({
    coldBrewList: [],
    brewedList: [],
  });

  useEffect(() => {
    fetch('/data/songyipark/listData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <div className="full-page">
      <div className="container">
        <Nav />
        <article>
          <header className="coffee-category">
            콜드 브루 커피 <i className="fas fa-mug-hot"></i>
            <span> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </header>

          <section className="coffee-menu-list">
            {coffeeList['coldBrewList'].map(coldBrewData => (
              <CoffeeCard key={coldBrewData.id} listData={coldBrewData} />
            ))}
          </section>

          <header className="coffee-category">
            브루드 커피 <i className="fas fa-mug-hot"></i>
            <span> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </header>

          <section className="coffee-menu-list">
            {coffeeList['brewedList'].map(brewedData => (
              <CoffeeCard key={brewedData.id} listData={brewedData} />
            ))}
          </section>
        </article>
      </div>
    </div>
  );
}

export default List;
