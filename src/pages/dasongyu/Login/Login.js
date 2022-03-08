import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function LoginComponent() {
  const [idState, setIdState] = useState([]);
  const [pwState, setPwState] = useState([]);
  const [visible, changeVisible] = useState(['disable']);
  const [opacity, setOpacity] = useState(0.5);

  const handleIDInput = e => {
    setIdState(e.target.value);
  };

  const handlePWInput = e => {
    setPwState(e.target.value);
  };

  const activeLoginBtn = () => {
    idState.includes('@') && pwState.length >= 5
      ? changeVisible('active')
      : changeVisible('disable');
  };

  const handleOpacity = () => {
    idState.includes('@') && pwState.length >= 5
      ? setOpacity(1)
      : setOpacity(0.5);
  };

  const handleLogin = () => {
    fetch('http://52.79.143.176:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: idState,
        password: pwState,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  return (
    <div className="webucks-login-box">
      <div className="login-box">
        <h1>WeBucks</h1>
        <div className="login-input">
          <input
            type="text"
            name="ID"
            id="id"
            placeholder="전화번호,사용자 이름 또는 이메일"
            value={idState}
            onChange={handleIDInput}
            onKeyUp={(activeLoginBtn, handleOpacity)}
          />
          <input
            type="password"
            name="Password"
            id="pw"
            placeholder="비밀번호"
            value={pwState}
            onChange={handlePWInput}
            onKeyUp={(activeLoginBtn, handleOpacity)}
          />
        </div>
        <div className="login-button">
          <Link to="/list-dasongyu">
            <button
              id="button"
              className={visible}
              style={{ opacity: opacity }}
              onClick={handleLogin}
            >
              로그인
            </button>
          </Link>
        </div>
        <p className="isfind-pw">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default LoginComponent;
