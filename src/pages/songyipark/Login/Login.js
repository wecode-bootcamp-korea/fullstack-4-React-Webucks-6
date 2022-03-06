import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState('');
  function handleIdInput(e) {
    setLoginData(e.target.value);
    console.log(setLoginData);
  }

  return (
    <div className="login-full-page">
      <main className="login-container">
        <img
          className="webucks-img"
          alt="webucks 로고"
          src="/images/songyipark/webucks.png"
        />
        <article className="login-section">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            className="pw"
            type="password"
            placeholder="비밀번호"
            onChange={handleIdInput}
          />
          <button
            className="login-btn"
            // disabled="true"
            // onClick={() => {
            //   loginBtn();
            // }}
          >
            <Link to="/list-songyipark">로그인</Link>
          </button>
        </article>
        <div className="pw-question">비밀번호를 잊으셨나요?</div>
      </main>
    </div>
  );
}

export default Login;
