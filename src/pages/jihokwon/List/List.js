import React, { useState, useEffect } from 'react';
import CoffeeCard from './Card';
// import styles from './Detail.modules.scss';
import './List.scss';
import TopsNav from './TopsNav';

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
      {CoffeeList.map(coffee => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default ListComponent;
