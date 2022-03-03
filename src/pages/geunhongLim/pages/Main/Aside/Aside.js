import "./Aside.scss";

function Aside() {
  return (
    <div>
      <header>
        <img src="images/geunhongLim/logo.png" alt="logo" />

        <nav>
          <ul className="nav-bar-list">
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>콜드 브루</h2>
        <ul className="link-path-list">
          <li>홈 /</li>

          <li>MENU /</li>

          <li>음료 /</li>

          <li>콜드 브루 /</li>

          <li>나이트로 바닐라 크림</li>
        </ul>

        <article className="menu-detail-article">
          <figure>
            <img
              src="images/geunhongLim/coffeeimg/1.jpg"
              alt="나이트로 바닐라 크림"
            />
          </figure>
          <div className="right-side">
            <table className="menu">
              <thead className="menu-name">
                <tr>
                  <th colSpan="3">
                    <h3>나이트로 바닐라 크림</h3>
                    <span>Nitro Vanilla Cream</span>
                  </th>
                  <td className="heart">
                    <button>
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="menu-de td-title">
                    부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을
                    한번에 느껴보세요!
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className="td-title">
                    <div>
                      <div>제품 영양 정보</div>
                      <div>Tall(톨) / 355ml (12 fl ox)</div>
                    </div>
                  </td>
                </tr>
                <tr className="detail-de-row">
                  <td>1회 제공량(Kcal)</td>
                  <td className="detail-table-second">80</td>
                  <td>나트륨 (mg)</td>
                  <td>40</td>
                </tr>
                <tr className="detail-de-row">
                  <td>포화지방 (g)</td>
                  <td className="detail-table-second">2</td>
                  <td>당류 (g)</td>
                  <td>10</td>
                </tr>
                <tr className="detail-de-row">
                  <td>단백질(g)</td>
                  <td className="detail-table-second">1</td>
                  <td>카페인 (mg)</td>
                  <td>232</td>
                </tr>
              </tbody>
            </table>

            <article className="menu-al">알레르기 유발 요인: 우유</article>

            <aside>
              <h4>리뷰</h4>
              <form className="reviews" action="">
                <div className="reviewContainer">
                  <div className="review">
                    <span className="user-id">coffe_lover</span>
                    <span className="text">너무 맛있어요!!</span>
                  </div>
                  <div className="review">
                    <span className="user-id"> CHOCO7 </span>
                    <span className="text">맛있다!!</span>
                  </div>
                  <div className="review">
                    <span className="user-id">dasdwad</span>
                    <span className="text"> 추천 </span>
                  </div>
                </div>
                <input
                  className="review-input"
                  type="text"
                  placeholder="리뷰를 입력해주세요."
                />
              </form>
            </aside>
          </div>
        </article>
      </section>

      <footer>
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
      </footer>
    </div>
  );
}

export default Aside;
