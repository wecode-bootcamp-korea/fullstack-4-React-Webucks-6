import React from "react";
import "./Detail.scss";
import Nav from "../Component/Nav/Nav";

function Detail() {
  return (
    <div className="full-page">
      <div className="container">
        <Nav />
        <main>
          <h1 className="detail-h1">콜드 브루</h1>
          <div className="coffee-classify">
            홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카
          </div>
          <section className="detail-section">
            <img
              className="white-choco-img"
              alt="화이트 초콜릿 모카 사진"
              src="/images/songyipark/c1.jpg"
            />
            <div className="detail-content">
              <div className="menu-title">
                <div>
                  <h2 className="detail-h2">화이트 초콜릿 모카</h2>
                  <h3 className="detail-h3">White Chocolate Mocha</h3>
                </div>
                <i className="far fa-heart"></i>
              </div>
              <hr className="underline" />
              <div className="menu-explain">
                달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
                섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
                부드럽게 어우러진 커피
              </div>
              <hr className="underline-repeat" />
              <span className="nutri-info-left">제품 영양 정보</span>
              <span className="nutri-info-right">
                Tall(톨) / 355ml(12 fl oz)
              </span>
              <hr className="underline-repeat" />
              <article className="kcal-table-grid">
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
              </article>
              <div className="allergy">알레르기 유발 요인 : 우유</div>
              <h4 className="detail-h4">리뷰</h4>
              <hr className="underline-repeat" />
              <div className="review">
                <div className="review-id">
                  coffee_lover
                  <span className="review-comment">너무 맛있어요!</span>
                </div>
                <div className="review-id">
                  CHOCO7
                  <span className="review-comment">
                    오늘도 화이트 초콜릿 모카를 마시러 갑니다.
                  </span>
                </div>
                <div className="review-id">
                  legend_dev
                  <span className="review-comment">
                    진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿
                    모카는 전설이다. 진짜 화이트 초
                  </span>
                </div>
              </div>
              <input
                className="review-input"
                placeholder="리뷰를 입력해주세요."
              />
            </div>
          </section>

          <footer className="detail-footer">
            <div className="footer-menu-title">
              <div>COMPANY</div>
              <div>한눈에 보기</div>
              <div>스타벅스 사명</div>
              <div>스타벅스 소개</div>
              <div>국내 뉴스룸</div>
              <div>세계의 스타벅스</div>
              <div>글로벌 뉴스룸</div>
            </div>
            <div className="footer-menu-title">
              <div>CORPORATE SALES</div>
              <div>단체 및 기업 구매 안내</div>
            </div>
            <div className="footer-menu-title">
              <div>PARTNERSHIP</div>
              <div>신규 입점 제의</div>
              <div>협력 고객사 등록 신청</div>
            </div>
            <div className="footer-menu-title">
              <div>ONLINE COMMUNITY</div>
              <div>페이스북</div>
              <div>트위터</div>
              <div>유튜브</div>
              <div>블로그</div>
              <div>인스타그램</div>
            </div>
            <div className="footer-menu-title">
              <div>RECRUIT</div>
              <div>채용 소개</div>
              <div>채용 지원하기</div>
            </div>
            <div className="footer-menu-title">
              <div>WEBUCKS</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Detail;
