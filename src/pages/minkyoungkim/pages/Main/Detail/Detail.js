import React from 'react';
import TopNav from '../../../components/TopNav/TopNav';
import Footer from '../../../components/Footer/Footer';
import './Detail.scss';

function Detail() {
  return (
    <>
      <div className="container">
        <TopNav />
        <section className="contents">
          <article className="imageBox">
            <img src="/images/minkyoungkim/coffeeImg1.jpeg" alt="coffee" />
          </article>
          <aside className="details">
            <div className="coffee-title">
              <h2>화이트 초콜릿 모카</h2>
              <p>White Chocolate Mocha</p>
              <button className="heart">🤍</button>
            </div>
            <div className="description">
              달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
              섞어 휘핑크림으로 마무 리한 음료를 달콤함과 강렬한 에스프레소가
              부드럽게 어우러진 커피
            </div>
            <div className="product-info">
              <div className="product-head">
                <h3>제품 영양 정보</h3>
                <h3>Tall(톨) / 355ml(12 fl oz)</h3>
              </div>
              <div className="product-content">
                <ul>
                  <li>
                    <dl>
                      <dt>1회 제공량 (kcal)</dt>
                      <dd>345</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>포화지방 (g)</dt>
                      <dd>11</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>단백질 (g)</dt>
                      <dd>11</dd>
                    </dl>
                  </li>
                </ul>
                <ul>
                  <li>
                    <dl>
                      <dt>나트륨 (mg)</dt>
                      <dd>150</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>당류 (g)</dt>
                      <dd>35</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>카페인 (mg)</dt>
                      <dd>75</dd>
                    </dl>
                  </li>
                </ul>
              </div>
              <div className="allergy">알레르기 유발 요인 : 우유</div>
            </div>
            <div className="review">
              <span className="review-title">리뷰</span>
              <div className="review-box">
                <p>
                  <span className="userId">coffeelovers</span>너무 맛있어요!
                </p>
                <p>
                  <span className="userId">choco</span>오늘도 화이트 초콜릿모카
                  먹으러 갑시다
                </p>
                <p>
                  <span className="userId">legend_dev</span>진짜 화이트 초콜릿
                  모카는 전설이다.진짜 화이트 초콜릿 모카는 전설이다.진짜 화이트
                  초콜릿 모카는 전설이다.
                </p>
              </div>
              <section className="reivewInput-wrapper">
                <input
                  className="reviewInput"
                  type="text"
                  placeholder="리뷰를 입력해주세요!"
                />
              </section>
            </div>
          </aside>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
