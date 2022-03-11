import React, { useState } from 'react';
import styles from '../../Detail/Detail.module.scss';
function Comments() {
  let reviewId = 0;
  const [input, setInput] = useState({});
  const [array, setArray] = useState([]);

  const addComment = item => {
    const items = {
      id: reviewId,
      item: item,
    };

    reviewId += 1;
    setArray(array.concat([items]));
  };

  const enterValue = event => {
    if (event.key === 'Enter') {
      setInput(event.target.value);
      addComment(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className={styles.review}>
      <span className={styles.reviewTitle}>리뷰</span>
      <div className={styles.reviewBox}>
        {array.map(comment => {
          return (
            <ul>
              <li className={styles.userId}> </li>
              <li>{comment.item}</li>
            </ul>
          );
        })}
      </div>
      <section className={styles.reivewInputWrapper}>
        <input
          name="comment"
          className={styles.reviewInput}
          onKeyPress={enterValue}
          type="text"
          placeholder="리뷰를 입력해주세요!"
        />
        <button type="button">등록</button>
      </section>
    </div>
  );
}

export default Comments;
