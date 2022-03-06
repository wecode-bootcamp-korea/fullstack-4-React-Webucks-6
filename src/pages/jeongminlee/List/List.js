import './List.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from './TopNav';
import CoffeeCard from './CoffeeCard';

function List() {
  return (
    <div className="body_list">
      <div className="list">
        <TopNav />
        <CoffeeCard />
      </div>
    </div>
  );
}

export default List;
