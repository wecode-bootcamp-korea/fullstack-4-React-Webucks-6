import React from 'react';
import './Main.scss';
import TopNav from '../../components/TopNav/TopNav';

function Main() {
  return (
    <div className="container">
      <TopNav />
      <section className="coffee-section">
        <article className="title-box">
          <h2>콜드 브루 커피</h2>
          <span>☕️</span>
          <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
        </article>
        <article className="coffee-contents">
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee1" src="/images/minkyoungkim/coffeeImg1.jpeg" />
            </div>
            <p className="coffee-name">나이트로 바닐라 크림 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg2.jpeg" />
            </div>
            <p className="coffee-name">돌체 콜드 브루 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg3.jpeg" />
            </div>
            <p className="coffee-name">바닐라 크림 콜드 브루 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg4.jpeg" />
            </div>
            <p className="coffee-name">벨벳 다크 모카 나이트로 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee5" src="/images/minkyoungkim/coffeeImg5.jpeg" />
            </div>
            <p className="coffee-name">시그니처 더 블랙 콜드 브루 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg6.jpeg" />
            </div>
            <p className="coffee-name">제주 비자림 콜드 브루 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg7.jpeg" />
            </div>
            <p className="coffee-name">콜드 브루 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg8.jpeg" />
            </div>
            <p className="coffee-name">콜드 브루 몰트 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg9.jpeg" />
            </div>
            <p className="coffee-name">콜드 브루 오트 라떼 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/coffeeImg10.jpeg" />
            </div>
            <p className="coffee-name">나이트로 콜드 브루 ♡</p>
          </div>
        </article>
      </section>
      <section className="coffee-section">
        <div className="title-box">
          <h2>브루드 커피</h2>
          <span>☕️</span>
          <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
        </div>
        <div className="coffee-contents">
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee1" src="/images/minkyoungkim/IcedCoffee1.jpeg" />
            </div>
            <p className="coffee-name">아이스 커피 ♡</p>
          </div>
          <div className="coffee-item">
            <div className="coffee-imgbox">
              <img alt="coffee" src="/images/minkyoungkim/IcedCoffee2.jpeg" />
            </div>
            <p className="coffee-name">오늘의 커피 ♡</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
