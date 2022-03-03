import './Main.scss';
import CoffeeCard from '../../components/CoffeeCard';

function Main() {
  return (
    <div>
      <header>
        <figure className="logo">
          <img src="images/logo.png" alt="logo" />
        </figure>
        <nav className="menu-nav-bar">
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>

      <section className="coffee-menu-section">
        <article className="coffee-title">
          <h3>콜드 브루 커피</h3>
          <i className="fa-solid fa-mug-hot"></i>
          <span className="option-explan">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </article>
        <CoffeeCard />

        {/* <figure>
          <ul className="coffee-menu-list">
            <li>
              <Link to="/aside-geunhongLim" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/1.jpg"
                  alt="나이트로 바닐라 크림"
                />
              </Link>
              <p>나이트로 바닐라 크림</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/2.jpg"
                  alt="나이트로 콜드 브루"
                />
              </Link>
              <p>나이트로 콜드 브루</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/3.jpg"
                  alt="돌체 콜드 브루"
                />
              </Link>
              <p>돌체 콜드 브루</p>
            </li>
            <li>
              <Link to="/">
                <img
                  src="images/geunhongLim/coffeeimg/4.jpg"
                  alt="바닐라 크림 콜드 브루"
                />
              </Link>
              <p>바닐라 크림 콜드 브루</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/5.jpg"
                  alt="벨벳 다크 모카 나이트로"
                />
              </Link>
              <p>벨벳 다크 모카 나이트로</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/6.jpg"
                  alt="시그니처 더 블랙 콜드 브루"
                />
              </Link>
              <p>시그니처 더 블랙 콜드 브루</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/7.jpg"
                  alt="제주 비자림 콜드 브루"
                />
              </Link>
              <p>제주 비자림 콜드 브루</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img src="images/geunhongLim/coffeeimg/8.jpg" alt="콜드 브루" />
              </Link>
              <p>콜드 브루</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/9.jpg"
                  alt="콜드 브루 몰트"
                />
              </Link>
              <p>콜드 브루 몰트</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/10.jpg"
                  alt="콜드 브루 오트 라떼"
                />
              </Link>
              <p>콜드 브루 오트 라떼</p>
            </li>
          </ul>
        </figure> */}
      </section>
      <section className="coffee-menu-section">
        <article className="coffee-title">
          <h3>브루드 커피</h3>

          <i className="fa-solid fa-mug-hot"></i>
          <span className="option-explan">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </article>
        {/* <figure>
          <ul className="coffee-menu-list">
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/11.jpg"
                  alt="아이스 커피"
                />
              </Link>
              <p>아이스 커피</p>
            </li>
            <li>
              <Link to="/" className="link">
                <img
                  src="images/geunhongLim/coffeeimg/12.jpg"
                  alt="오늘의 커피"
                />
              </Link>
              <p>오늘의 커피</p>
            </li>
          </ul>
        </figure> */}
      </section>
    </div>
  );
}

export default Main;
