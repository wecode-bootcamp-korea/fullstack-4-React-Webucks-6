import { useState } from 'react';
import styles from './Detail.module.scss';
import Nav from '../../components/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';

function Aside() {
  const [color, setColor] = useState('black');
  const [review, setReview] = useState('우주최강맛임 대박ㅋㅋ');
  const [reviewArray, setReviewArray] = useState([
    { id: `초코덕후`, review: review },
  ]);

  const handleColor = event => {
    event.target.style.color === 'red' ? setColor('black') : setColor('red');
  };

  const handleTotalEnter = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(review);
      const array = [...reviewArray];
      if (event.target.value !== '') array.push({ id: '익명', review: review });
      setReviewArray(array);
      event.target.value = '';
    }
  };

  const handleReviewInput = event => {
    setReview(event.target.value);
  };

  return (
    <div className={styles.ghDetailDiv}>
      <Nav />
      <section className={styles.ghDetailSection}>
        <h2>콜드 브루</h2>
        <ul className={styles.linkPathList}>
          <li>홈 /</li>
          <li>MENU /</li>
          <li>음료 /</li>
          <li>콜드 브루 /</li>
          <li>나이트로 바닐라 크림</li>
        </ul>

        <article className={styles.menuDetailArticle}>
          <figure>
            <img src="images/coffeeimg/1.jpg" alt="나이트로 바닐라 크림" />
          </figure>
          <div className="right-side">
            <table className={styles.ghDetailTable}>
              <thead className={styles.menuName}>
                <tr>
                  <th colSpan="3">
                    <h3>나이트로 바닐라 크림</h3>
                    <span>Nitro Vanilla Cream</span>
                  </th>
                  <td className={styles.heart}>
                    <button>
                      <i
                        className="fa-solid fa-heart"
                        style={{ color: color }}
                        onClick={event => {
                          handleColor(event);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className={styles.menuDe}>
                    부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을
                    한번에 느껴보세요!
                  </td>
                </tr>
                <tr>
                  <td colSpan="4" className={styles.tdTitle}>
                    <div>
                      <div>제품 영양 정보</div>
                      <div>Tall(톨) / 355ml (12 fl ox)</div>
                    </div>
                  </td>
                </tr>
                <tr className={styles.detailDeRow}>
                  <td>1회 제공량(Kcal)</td>
                  <td className={styles.detailTableSecond}>80</td>
                  <td>나트륨 (mg)</td>
                  <td>40</td>
                </tr>
                <tr className={styles.detailDeRow}>
                  <td>포화지방 (g)</td>
                  <td className={styles.detailTableSecond}>2</td>
                  <td>당류 (g)</td>
                  <td>10</td>
                </tr>
                <tr className={styles.detailDeRow}>
                  <td>단백질(g)</td>
                  <td className={styles.detailTableSecond}>1</td>
                  <td>카페인 (mg)</td>
                  <td>232</td>
                </tr>
              </tbody>
            </table>

            <article className={styles.menuAl}>
              알레르기 유발 요인: 우유
            </article>

            <aside>
              <h4>리뷰</h4>
              <div className="reviews" action="">
                <ul className="reviewContainer">
                  <li className={styles.ghReview}>
                    <span className={styles.userId}>coffe_lover</span>
                    <span className="text">너무 맛있어요!!</span>
                  </li>
                  <li className={styles.ghReview}>
                    <span className={styles.userId}> CHOCO7 </span>
                    <span className="text">맛있다!!</span>
                  </li>
                  <li className={styles.ghReview}>
                    <span className={styles.userId}>dasdwad</span>
                    <span className="text"> 추천 </span>
                  </li>
                  {reviewArray.map(data => (
                    <li className={styles.ghReview} key={data.id}>
                      <span className={styles.userId}>{data.id}</span>
                      <span className="text"> {data.review}</span>
                    </li>
                  ))}
                </ul>

                <input
                  className="review-input"
                  type="text"
                  placeholder="리뷰를 입력해주세요."
                  onKeyPress={event => {
                    handleTotalEnter(event);
                  }}
                  onKeyUp={event => {
                    handleReviewInput(event);
                  }}
                />
              </div>
            </aside>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Aside;
