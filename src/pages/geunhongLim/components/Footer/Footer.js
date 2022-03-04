import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <ul>
          COMPANY
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
        <ul>
          CORPORATE SALES
          <li>단체 및 기업 구매 안내</li>
        </ul>
        <ul>
          PARTNERSHIP
          <li>신규 입점 제의</li>
          <li>협력 고지사 등록 신청</li>
        </ul>
        <ul>
          ONLINE COMMUNITY
          <li>페이스북</li>
          <li>트위터</li>
          <li>유투브</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ul>
        <ul>
          RECRUIT
          <li>채용소개</li>
          <li>채용지원하기</li>
        </ul>
        <ul>WEBUCKS</ul>
      </div>
    </footer>
  );
}

export default Footer;
