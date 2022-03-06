import React from 'react';
import './Detail.scss';
import TopNav from '../components/Nav/TopNav/TopNav';
import Footer from '../components/Footer/Footer';

function DetailComponent() {
  return (
    <>
      <div className="box">
        <TopNav />

        <h2>콜드 브루</h2>

        <div className="mini-menu">
          <p>
            홈 {'>'} MENU {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜릿 모카
          </p>
        </div>

        <div className="info-box">
          <span className="coffee-img">
            <img src="./images/coffeeImg/1.jpg" />
          </span>

          <div className="text-box">
            <div className="text-box-head">
              <div className="text-box-head-title">
                <p>화이트 초콜릿 모카</p>
                <p>White Chocolate Mocha</p>
              </div>
              <div className="heart-text">
                <i className="fa-regular fa-heart" />
              </div>
            </div>

            <div className="text-box-info">
              <p>
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </p>
            </div>

            <div className="text-box-nutrition-info">
              <span>제품 영양 정보</span>
              <span>Tall(톨) / 355ml (12 fl oz)</span>
            </div>

            <div className="text-box-nutrition-info-box">
              <div className="text-box-nutrition-info-box-left">
                <div>
                  <p>1회 지공량 (kcal)</p>
                  <p>포화지방 (g)</p>
                  <p>단백질 (g)</p>
                </div>
                <div>
                  <p>345</p>
                  <p>11</p>
                  <p>11</p>
                </div>
              </div>
              <div className="text-box-nutrition-info-box-right">
                <div>
                  <p>나트륨 (mg)</p>
                  <p>당류 (g)</p>
                  <p>카페인 (mg)</p>
                </div>
                <div>
                  <p>150</p>
                  <p>35</p>
                  <p>75</p>
                </div>
              </div>
            </div>

            <div className="text-box-allergy-info">
              <span>알레르기 유발 요인 : 우유</span>
            </div>

            <div className="text-box-review">
              <p>리뷰</p>
            </div>
            <div className="text-box-review-comment">
              <p>
                {' '}
                <strong>coffee_lover</strong> 너무 맛있어요!
              </p>
              <p>
                <strong>CHOCO7</strong> 오늘도 화이트 초콜릿 모카를 마시러
                갑니다.
              </p>
              <p>
                <strong>legend_dev</strong> 진짜 화이트 초콜릿 모카는 전설이다.
                진짜 화이트 초콜릿 모카는 전설이다.
              </p>
            </div>

            <input
              type="text"
              className="text-box-review-input"
              placeholder="리뷰를 입력해주세요."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailComponent;
