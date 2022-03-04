import './List.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from '../List/TopNav';

function List() {
  return (
    <div className="body_list">
      <div className="list">
        <TopNav />
        <div className="kind">
          <span className="kind1">콜드 브루 커피&nbsp;&nbsp;</span>
          <i class="fa-solid fa-mug-hot" />
          <span>&nbsp;&nbsp;</span>
          <span className="explain1_list">
            디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
          </span>
        </div>
        <div className="menu">
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee.jpg"
            />
            <span className="coffee_name">카라멜 모카❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee2.jpg"
            />
            <span className="coffee_name">나이트로 바닐라 크림❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee3.jpg"
            />
            <span className="coffee_name">아이스 아메리카노❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee4.jpg"
            />
            <span className="coffee_name">에스프레소❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee5.jpg"
            />
            <span className="coffee_name">카페라떼❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee6.jpg"
            />
            <span className="coffee_name">카푸치노❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee7.jpg"
            />
            <span className="coffee_name">카페모카❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee8.jpg"
            />
            <span className="coffee_name">카라멜 마끼아또❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee9.jpg"
            />
            <span className="coffee_name">연유라떼❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee10.jpg"
            />
            <span className="coffee_name">바닐라 라떼❤</span>
          </div>
        </div>
        <br />
        <div className="kind">
          <span className="kind1">브루드 커피&nbsp;&nbsp;</span>
          <i class="fa-solid fa-mug-hot" />
          <span>&nbsp;&nbsp;</span>
          <span className="explain1_list">
            디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
          </span>
        </div>
        <div className="menu2">
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee11.jpg"
            />
            <span className="coffee_name">블랙펄 카페라떼❤</span>
          </div>
          <div className="explain">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/coffee12.jpg"
            />
            <span className="coffee_name">콜드브루 디카페인❤</span>
          </div>
          <div className="hidden">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/white.jpg"
            />
            <span className="coffee_name" />
          </div>
          <div className="hidden">
            <img
              className="cold_brew_coffee"
              alt="cold_brew_coffee"
              src="/images/jeongminlee/white.jpg"
            />
            <span className="coffee_name" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
