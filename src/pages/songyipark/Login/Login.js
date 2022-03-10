import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [idData, setIdData] = useState('');
  const [pwData, setPwData] = useState('');

  const btnActiveCondition = idData.includes('@') && pwData.length >= 5;

  const navigate = useNavigate();

  function handleIdInput(e) {
    setIdData(e.target.value);
  }

  function handlePwInput(e) {
    setPwData(e.target.value);
  }

  function handleLogin() {
    navigate('/list-songyipark');

    fetch('http://52.79.143.176:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: idData,
        password: pwData,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
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
            className={`login-btn ${btnActiveCondition ? '' : 'login-opacity'}`}
            type="button"
            onClick={handleLogin}
            disabled={!btnActiveCondition}
          >
            로그인
          </button>
        </article>
        <div className="pw-question">비밀번호를 잊으셨나요?</div>
      </main>
    </div>
  );
}

export default Login;
