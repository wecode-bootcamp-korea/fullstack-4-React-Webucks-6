import './List.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from './TopNav';
import CoffeeCard from './CoffeeCard';
import { useEffect, useState } from 'react';

function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <div className="body_list">
      <div className="list">
        <TopNav />
        {/* 콜드브루커피 네비게이션 바 */}
        <div className="kind">
          <span className="kind1">콜드 브루 커피&nbsp;&nbsp;</span>
          <i className="fa-solid fa-mug-hot" />
          <span>&nbsp;&nbsp;</span>
          <span className="explain1_list">
            디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
          </span>
          {/* 콜드브루커피 네비게이션 바 */}
        </div>
        <div className="menu">
          {coffeeList.map(el => {
            if (el.id <= 10) {
              return <CoffeeCard key={el.id} Coffee={el} />;
            }
          })}
        </div>

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
        <div className="menu">
          {coffeeList.map(el => {
            if (el.id > 10) {
              return <CoffeeCard key={el.id} Coffee={el} />;
            }
          })}
          {/* 브루드커피 두 칸 채우기 용*/}
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
          {/* 브루드커피 두 칸 채우기 용*/}
        </div>
      </div>
    </div>
  );
}

export default List;
