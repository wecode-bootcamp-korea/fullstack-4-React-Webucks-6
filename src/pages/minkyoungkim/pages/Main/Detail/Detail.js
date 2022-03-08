import React from 'react';
import { useState, useEffect } from 'react';
import TopNav from '../../../components/TopNav/TopNav';
import Footer from '../../../components/Footer/Footer';
import styles from './Detail.module.scss';
// import Comments from './Comments/Comments';
import { useParams } from 'react-router-dom';

function Detail() {
  const pTag = React.createElement('p');

  const params = useParams();
  const [heart, setHeart] = useState('🤍');
  const changeHeartColor = () => {
    heart === '🤍' ? setHeart('❤️') : setHeart('🤍');
  };

  const [input, setInput] = useState({
    comment: [],
  });

  const { comment } = input;

  const handleInput = event => {
    const { value, name } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const enterComment = event => {
    if (event.key === 'Enter') return console.log('하이');
  };

  const inputComments = data => {
    console.log(data);
  };
  const [details, setDetails] = useState({
    id: 0,
    name: '',
    engName: '',
    description: '',
    nutritionInfo: [],
    allergy: '',
    review: [],
  });

  useEffect(() => {
    fetch(`http://localhost:3000/data/${params.id}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetails(data);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <TopNav />
        <section className={styles.contents}>
          <article className={styles.imageBox}>
            <img src={`/${details.img}`} alt={details.name} />
          </article>
          <aside className={styles.details}>
            <div className={styles.coffeeTitle}>
              <h2>{details.name}</h2>
              <p>{details.engName}</p>
              <button onClick={changeHeartColor} className={styles.heart}>
                {heart}
              </button>
            </div>
            <div className={styles.description}>{details.description}</div>
            <div className={styles.productInfo}>
              <div className={styles.productHead}>
                <h3>제품 영양 정보</h3>
                <h3>Tall(톨) / 355ml(12 fl oz)</h3>
              </div>
              <div className={styles.productContent}>
                <ul>
                  {details.nutritionInfo.map((info, index) => {
                    return (
                      <li key={index}>
                        <dl>
                          <dt>{info.name}</dt>
                          <dd>{info.percent}</dd>
                        </dl>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.allergy}>알레르기 유발 요인 : 우유</div>
            </div>
            <div className={styles.review}>
              <span className={styles.reviewTitle}>리뷰</span>
              <div className={styles.reviewBox}>
                {details.review.map((review, index) => {
                  return (
                    <p key={index}>
                      <span className={styles.userId}>{review.userId}</span>
                      {review.comment}
                    </p>
                  );
                })}
              </div>
              <section className={styles.reivewInputWrapper}>
                <input
                  name="comment"
                  onSubmit={inputComments(input)}
                  value={comment}
                  onChange={handleInput}
                  onKeyPress={enterComment}
                  className={styles.reviewInput}
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
