import { useState } from 'react';
import styles from './Comment.module.scss';

//컴포넌트
function Comment() {
  //useState
  const [review, setReview] = useState('우주최강맛임 대박ㅋㅋ');
  const [reviewArray, setReviewArray] = useState([
    { id: `초코덕후`, review: review },
  ]);
  //함수
  const handleTotalEnter = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault();
      const repoArray = [...reviewArray];
      repoArray.push({ id: '익명', review: review });
      setReviewArray(repoArray);
      event.target.value = '';
    }
  };

  const handleReviewInput = event => {
    setReview(event.target.value);
  };

  const handleDeleteComment = event => {
    console.log(reviewArray);
    const deleteMent = event.target.previousElementSibling.lastChild.innerText;

    const newArray = reviewArray.filter(data => data.review !== deleteMent);
    console.log(newArray);
  };

  // 렌더링
  return (
    <aside className={styles.ghAsideAside}>
      <h4>리뷰</h4>
      <div className="reviews" action="">
        <ul className="reviewContainer">
          {reviewArray.map(data => (
            <li className={styles.ghReview} key={data.id}>
              <div className={styles.ghreviewWrap}>
                <span className={styles.userId}>{data.id}</span>
                <span className="text"> {data.review}</span>
              </div>
              <button
                className={styles.ghDeleteBTn}
                onClick={event => {
                  handleDeleteComment(event);
                }}
              >
                삭제
              </button>
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
  );
}

export default Comment;
