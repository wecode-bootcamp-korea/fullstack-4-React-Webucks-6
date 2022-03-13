import React, { useState } from 'react';

import './Comment.scss';

function Comment({ comments, deleteComment }) {
  const [changeColor, setChangeColor] = useState(false);
  const onClickTrashCan = () => {
    deleteComment(comments.key);
  };

  const onClickHeart = () => {
    if (comments.commentLike && changeColor) {
      comments.commentLike = false;
      setChangeColor('false');
    } else {
      comments.commentLike = true;
      setChangeColor('true');
    }
  };

  return (
    <div>
      <li className="comment_li" key={comments.key}>
        <li className="comment__id">{comments.id}</li>
        <li>{comments.comment}</li>
        <i
          className={
            comments.commentLike ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
          }
          onClick={onClickHeart}
        />
        <i className="fa-regular fa-trash-can gray" onClick={onClickTrashCan} />
      </li>
    </div>
  );
}

export default Comment;
