import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [idData, setIdData] = useState('');
  const [pwData, setPwData] = useState('');
  const btnActive = idData.includes('@') && pwData.length >= 5;

  function handleIdInput(e) {
    setIdData(e.target.value);
  }

  function handlePwInput(e) {
    setPwData(e.target.value);
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
            onChange={handlePwInput}
          />
          <button
            className="login-btn"
            style={{
              opacity: btnActive ? '1.0' : '0.4',
            }}
          >
            <Link
              to="/list-songyipark"
              className="login-link"
              onClick={e => {
                btnActive || e.preventDefault();
              }}
            >
              로그인
            </Link>
          </button>
        </article>
        <div className="pw-question">비밀번호를 잊으셨나요?</div>
      </main>
    </div>
  );
}

export default Login;
