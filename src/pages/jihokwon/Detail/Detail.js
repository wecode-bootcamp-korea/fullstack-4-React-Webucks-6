import React, { useState } from 'react';
import TopsNav from '../components/TopsNav/TopsNav';
// import Comment from '../components/Comment/Comment';
import './Detail.scss';
// import { Link } from 'react-router-dom';

function DetailComponent() {
  const [inputValue, setInputValue] = useState('');
  const [commentArr, setCommentArr] = useState([
    { id: '', comment: inputValue },
  ]);
  const [changeRed, setChangeRed] = useState('fa-regular');

  // 댓글인풋값 받는 함수
  const handleInput = event => {
    setInputValue(event.target.value);
  };

  //엔터 했을 때 코멘트를 배열에 저장하는 함수
  const addComment = event => {
    let newComment = event.target.value;
    setInputValue(newComment);
    if (event.keyCode === 13) {
      event.preventDefault();
      if (newComment !== '') {
        const array = [...commentArr];
        array.push({ id: 'guest', comment: newComment });
        setCommentArr(array);
        setInputValue('');
      }
    }
  };

  const isLike = () => {
    changeRed === 'fa-regular'
      ? setChangeRed('fa-solid')
      : setChangeRed('fa-regular');
  };
  return (
    <div>
      <TopsNav />
      <section className="detail-section">
        <h1>
          <ul className="coffee-title">
            <li>콜드 브루</li>
            <li>홈 > MENU > 음료 > 콜드브루 > 바닐라 크림 콜드브루</li>
          </ul>
        </h1>
        <div className="jh_container">
          <div className="img-box">
            <img
              src="images/jihokwon/images/vanilaCream.jpg"
              alt="vanilaColdbrew"
            />
          </div>
          <div className="jh_details">
            <div className="details__info">
              <ul>
                <li>바닐라 크림 콜드 브루</li>
                <li>Vanilla Cream Cold Brew</li>
              </ul>
              <i
                className={`
                  ${changeRed} fa-heart`}
                onClick={() => {
                  isLike();
                }}
              />
            </div>
            <div className="description">
              콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 브루를 새롭게
              즐길 수 있는 음료입니다.
            </div>
            <ui className="nutrition-title">
              <li>제품 영양 정보</li>
              <li>Tall(톨)/355ml (12fl oz)</li>
            </ui>
            <div className="kcal__container">
              <div className="container__nutritions first-box">
                <ul>
                  <li>1회 제공량(kcal)</li>
                  <li>125</li>
                </ul>
                <ul>
                  <li>포화지방(g)</li>
                  <li>6</li>
                </ul>
                <ul>
                  <li>단백질(g)</li>
                  <li>3</li>
                </ul>
              </div>
              <div className="container__nutritions">
                <ul>
                  <li>나트륨(mg)</li>
                  <li>58</li>
                </ul>
                <ul>
                  <li>당류(g)</li>
                  <li>11</li>
                </ul>
                <ul>
                  <li>카페인(mg)</li>
                  <li>150</li>
                </ul>
              </div>
            </div>
            <div className="allergy-info">알레르기 유발 요인: 우유</div>
            <ul>
              <li className="reviews">리뷰</li>
              <li className="comment_li">
                <li className="comment__id">coffee_lover</li>
                <li>너무 맛있어요!</li>
              </li>
              <li className="comment_li">
                <span className="comment__id">CHOCO7</span>
                <span>오늘도 바크콜을 마시러 갑니다.</span>
              </li>
              <li className="comment_li">
                <li className="comment__id">legend_dev</li>
                <li>진짜 바크콜은 전설이다. 진짜 화이팅.</li>
              </li>
              {commentArr.map(comments => (
                <li className="comment_li" key={comments.id}>
                  <li className="comment__id">{comments.id}</li>
                  <li>{comments.comment}</li>
                </li>
              ))}
            </ul>
            <div className="input-box">
              <input
                type="text"
                placeholder="리뷰를 입력해주세요."
                value={inputValue}
                onChange={handleInput}
                onKeyUp={addComment}
              />
              <button>전송</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <ul>
          <li>COMPANY</li>
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
        <ui>
          <li>CORPORATE SALES</li>
          <li>단체 및 기업 구매 안내</li>
        </ui>
        <ui>
          <li>PARTNERSHIP</li>
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ui>
        <ui>
          <li>ONLINE COMMUNITY</li>
          <li>페이스북</li>
          <li>트위터</li>
          <li>유튜브</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ui>
        <ui>
          <li>RECRUIT</li>
          <li>채용 소개</li>
          <li>채용 지원하기</li>
        </ui>
        <ul>
          <li>WEBUCKS</li>
        </ul>
      </footer>
    </div>
  );
}
export default DetailComponent;
