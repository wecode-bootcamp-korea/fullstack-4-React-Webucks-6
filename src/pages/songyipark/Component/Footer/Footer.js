import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div>
      <footer className="detail-footer">
        <section className="footer-menu-title">
          <div>COMPANY</div>
          <div>한눈에 보기</div>
          <div>스타벅스 사명</div>
          <div>스타벅스 소개</div>
          <div>국내 뉴스룸</div>
          <div>세계의 스타벅스</div>
          <div>글로벌 뉴스룸</div>
        </section>

        <section className="footer-menu-title">
          <div>CORPORATE SALES</div>
          <div>단체 및 기업 구매 안내</div>
        </section>

        <section className="footer-menu-title">
          <div>PARTNERSHIP</div>
          <div>신규 입점 제의</div>
          <div>협력 고객사 등록 신청</div>
        </section>

        <section className="footer-menu-title">
          <div>ONLINE COMMUNITY</div>
          <div>페이스북</div>
          <div>트위터</div>
          <div>유튜브</div>
          <div>블로그</div>
          <div>인스타그램</div>
        </section>

        <section className="footer-menu-title">
          <div>RECRUIT</div>
          <div>채용 소개</div>
          <div>채용 지원하기</div>
        </section>

        <section className="footer-menu-title">
          <div>WEBUCKS</div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
