import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function CoffeeCard({ listData }) {
  const [faIcon, setFaIcon] = useState('fa-regular');

  const changeIcon = () => {
    faIcon === 'fa-regular' ? setFaIcon('fa-solid') : setFaIcon('fa-regular');
  };

  return (
    <div className="list-wrapper">
      <Link to="/detail-songyipark">
        <img className="coffee-img" src={listData.image} alt={listData.name} />
      </Link>
      <span> {listData.name} </span>
      <i className={`${faIcon} fa-heart`} onClick={changeIcon} />
    </div>
  );
}

export default CoffeeCard;
