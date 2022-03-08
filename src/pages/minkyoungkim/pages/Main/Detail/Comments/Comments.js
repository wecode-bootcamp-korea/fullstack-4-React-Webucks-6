import React from 'react';
import styles from '../../Detail/Detail.module.scss';

function comments({ review }) {
  console.log(review);
  return (
    <p key={review.id}>
      <span className={styles.userId}>{review.userId}</span>
      {review.comment}
    </p>
  );
}

export default comments;
