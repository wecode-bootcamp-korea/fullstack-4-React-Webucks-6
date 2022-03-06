import React from 'react';
import './List.scss';
// import { Link } from 'react-router-dom';
import Nav from '../Component/Nav/Nav';
import CoffeeCard1 from './CoffeeCard1';
import CoffeeCard2 from './CoffeeCard2';

function List() {
  return (
    <div className="full-page">
      <div className="container">
        <Nav />
        <div>
          <h1 className="coffee-category">
            콜드 브루 커피 &nbsp; <i className="fas fa-mug-hot"></i>
            <span>
              &nbsp; 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </h1>
          <CoffeeCard1 />
          <h1 className="coffee-category">
            브루드 커피 &nbsp; <i className="fas fa-mug-hot"></i>
            <span>
              &nbsp; 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </h1>
          <CoffeeCard2 />
        </div>
      </div>
    </div>
  );
}

export default List;
