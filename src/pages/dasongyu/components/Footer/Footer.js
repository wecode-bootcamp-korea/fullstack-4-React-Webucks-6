import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-nav">
        <p className="footer-title">COMPANY</p>
        <p>한눈에 보기</p>
        <p>위벅스 사명</p>
        <p>위벅스 소개</p>
        <p>국내 뉴스룸</p>
        <p>세계의 위벅스</p>
        <p>글로벌 뉴스룸</p>
      </div>
      <div className="footer-nav">
        <p className="footer-title">CORPORATE SALES</p>
        <p>단체 및 기업 구매 안내</p>
      </div>
      <div className="footer-nav">
        <p className="footer-title">PARTNERSHIP</p>
        <p>신규 입점 제의</p>
        <p>협력 고객사 등록 신청</p>
      </div>
      <div className="footer-nav">
        <p className="footer-title">ONLINE COMMUNITY</p>
        <p>페이스북</p>
        <p>트위터</p>
        <p>유튜브</p>
        <p>블로그</p>
        <p>인스타그램</p>
      </div>
      <div className="footer-nav">
        <p className="footer-title">RECRUIT</p>
        <p>채용 소개</p>
        <p>채용 지원하기</p>
      </div>
      <div className="footer-nav">
        <p className="footer-title">WEBUCKS</p>
      </div>
    </footer>
  );
}

export default Footer;
