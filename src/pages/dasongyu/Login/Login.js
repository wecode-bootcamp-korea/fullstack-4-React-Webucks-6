import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function LoginComponent() {
  const [idState, setIdState] = useState([]);
  const [pwState, setPwState] = useState([]);

  const handleIDInput = e => {
    setIdState(e.target.value);
  };

  const handlePWInput = e => {
    setPwState(e.target.value);
  };

  return (
    <div>
      <div className="login-box">
        <h1>WeBucks</h1>
        <div className="login-input">
          <input
            type="text"
            name="ID"
            id="input-id"
            placeholder="전화번호,사용자 이름 또는 이메일"
            value={idState}
            onChange={handleIDInput}
          />
          <input
            type="password"
            name="Password"
            id="input-pw"
            placeholder="비밀번호"
            minlength="8"
            value={pwState}
            onChange={handlePWInput}
          />
        </div>
        <div className="login-button">
          <button id="button" disabled="disabled" onclick="">
            로그인
          </button>
        </div>
        <p className="isfind-pw">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default LoginComponent;
