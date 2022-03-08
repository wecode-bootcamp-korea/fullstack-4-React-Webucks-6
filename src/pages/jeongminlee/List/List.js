import './List.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from './TopNav';
import CoffeeCard from './CoffeeCard';
import { useEffect, useState } from 'react';

function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  const coldBrewCoffee = coffeeList.filter(el => el.id <= 10);
  const BrewedCoffee = coffeeList.filter(el => el.id > 10);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  console.log(coffeeList.id);
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
        <CoffeeCard
          coffeeList={BrewedCoffee}
          // BrewedCoffee={BrewedCoffee}
        />
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
        <CoffeeCard
          coffeeList={BrewedCoffee}
          // BrewedCoffee={BrewedCoffee}
        />
      </div>
    </div>
  );
}

export default List;
