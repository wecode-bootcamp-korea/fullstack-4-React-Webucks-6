import './TopNav.scss';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="nav-bar">
      <h1>WeBucks</h1>
      <div className="nav">
        <span>COFFEE </span>
        <span>
          <Link to="/list-dasongyu">MENU</Link>
        </span>
        <span>STORE</span>
        <span>WHAT'S NEW</span>
      </div>
    </div>
  );
}
export default TopNav;
