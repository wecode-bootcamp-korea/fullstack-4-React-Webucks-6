import React from 'react';
import { useEffect, useState } from 'react';
// import COFFEE_LIST from '/public/data/listData.json';
import './CoffeeCard.scss';

function CoffeeCard() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  const coldBrewCoffee = coffeeList.filter(el => el.id <= 10);
  const BrewedCoffee = coffeeList.filter(el => el.id > 10);

  return (
    <div className="CoffeeCard">
      <div className="menu">
        {coldBrewCoffee.map(el => (
          <div key={el.id} className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src={el.image}
            />
            <span className="coffee_name">{el.name}</span>
          </div>
        ))}
      </div>
      {/* 콜드브루커피 메뉴 */}
      <br />
      {/* 브루드커피 네비게이션 바 */}
      <div className="kind">
        <span className="kind1">브루드 커피&nbsp;&nbsp;</span>
        <i className="fa-solid fa-mug-hot" />
        <span>&nbsp;&nbsp;</span>
        <span className="explain1_list">
          디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </span>
      </div>
      {/* 브루드커피 네비게이션 바 */}
      {/* 브루드커피 메뉴 */}
      <div className="menu2">
        {BrewedCoffee.map(el => (
          <div key={el.id} className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src={el.image}
            />
            <span className="coffee_name">{el.name}</span>
          </div>
        ))}
        {/* 브루드커피 메뉴 */}
        {/* 브루드커피 여백 채우기용*/}
        <div className="hidden">
          <img
            className="cold_brew_coffee"
            alt="cold_brew_coffee"
            src="/images/coffeeImg/1.jpg"
          />
          <span className="coffee_name" />
        </div>

        <div className="hidden">
          <img
            className="cold_brew_coffee"
            alt="cold_brew_coffee"
            src="/images/coffeeImg/1.jpg"
          />
          <span className="coffee_name" />
        </div>
        {/* 브루드커피 여백 채우기용*/}
      </div>
    </div>
  );
}

export default CoffeeCard;
