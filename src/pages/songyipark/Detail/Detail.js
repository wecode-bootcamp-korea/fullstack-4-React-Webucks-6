import React, { useEffect, useState } from 'react';
import './Detail.scss';
import Nav from '../Component/Nav/Nav';
import Footer from '../Component/Footer/Footer';

function Detail() {
  return (
    // const [coffeeDetail, setCoffeeDetail] = useState({
    //   "id": 0,
    //   "name": "",
    //   "engName": "",
    //   "description": "",
    //   "img": "/normal.jpg",
    //   "nutritionInfo": [],
    //   "allergy": "",
    //   "review": [],
    // });

    // useEffect

    <div className="detail-full-page">
      <div className="detail-container">
        <Nav />
        <main>
          <header>
            <h1 className="coffee-h1">콜드 브루</h1>
            <div className="coffee-classify">
              홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카
            </div>
          </header>

          <article className="detail-article-wrapper">
            <img
              className="white-choco-img"
              alt="화이트 초콜릿 모카 사진"
              src="/images/songyipark/c1.jpg"
            />

            <section className="menu-section">
              <header className="menu-title">
                <div>
                  <h2 className="menu-h2">화이트 초콜릿 모카</h2>
                  <h3 className="menu-h3">White Chocolate Mocha</h3>
                </div>
                <i className="far fa-heart"></i>
              </header>

              <p className="menu-explain">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </p>

              <section className="nutrition-section">
                <div className="nutri-info">
                  <span className="nutri-info-left">제품 영양 정보</span>
                  <span className="nutri-info-right">
                    Tall(톨) / 355ml(12 fl oz)
                  </span>
                </div>
                <div className="kcal-table-grid">
                  <div>1회 제공량(kcal)</div>
                  <div className="kcal-align-right line-dashed">345</div>
                  <div>&nbsp;&nbsp;나트륨 (mg)</div>
                  <div className="kcal-align-right">150</div>
                  <div>포화지방 (g)</div>
                  <div className="kcal-align-right line-dashed">11</div>
                  <div>&nbsp;&nbsp;당류 (g)</div>
                  <div className="kcal-align-right">35</div>
                  <div>단백질 (g)</div>
                  <div className="kcal-align-right line-dashed">11</div>
                  <div>&nbsp;&nbsp;카페인 (mg)</div>
                  <div className="kcal-align-right">75</div>
                </div>
              </section>

              <p className="allergy">알레르기 유발 요인 : 우유</p>

              <section className="review-section">
                <h4 className="review-h4">리뷰</h4>
                <div className="review-id-comment">
                  <p className="review-id">
                    coffee_lover
                    <span className="review-comment">너무 맛있어요!</span>
                  </p>
                  <p className="review-id">
                    CHOCO7
                    <span className="review-comment">
                      오늘도 화이트 초콜릿 모카를 마시러 갑니다.
                    </span>
                  </p>
                  <p className="review-id">
                    legend_dev
                    <span className="review-comment">
                      진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿
                      모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다.
                    </span>
                  </p>
                </div>
              </section>

              <input
                className="review-input"
                placeholder="리뷰를 입력해주세요."
              />
            </section>
          </article>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Detail;
