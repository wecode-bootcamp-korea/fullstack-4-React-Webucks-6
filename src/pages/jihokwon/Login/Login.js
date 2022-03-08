import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginComponent() {
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/list-jihokwon');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [loginBtnColor, setLoginBtnColor] = useState('#add3ea');
  const [isBtnActive, setIsBtnActive] = useState(true);

  useEffect(() => {
    id.includes('@') && pw.length > 4
      ? setIsBtnActive(false)
      : setIsBtnActive(true);
  }, [id, pw]);

  useEffect(() => {
    id.includes('@') && pw.length > 4
      ? setLoginBtnColor('#3e98f2')
      : setLoginBtnColor('#add3ea');
  }, [id, pw]);

  function handleIdInput(event) {
    setId(event.target.value);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
  }

  const handleSignUp = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  return (
    <div>
      <div className="loginBox">
        <div className="loginArea">
          <div className="login_title">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="inputAndBtn">
            <input
              className="loginArea_input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={id}
              onChange={handleIdInput}
            />
            <input
              className="loginArea_input"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePwInput}
            />
            <button
              className="loginArea_btn"
              disabled={isBtnActive}
              onClick={() => {
                goToList();
                handleLogin();
              }}
              style={{ backgroundColor: loginBtnColor }}
            >
              로그인
            </button>
            <button
              className="loginArea_btn"
              disabled={isBtnActive}
              onClick={handleSignUp}
              style={{ backgroundColor: loginBtnColor }}
            >
              회원가입
            </button>
          </div>
          <Link to="/signup" className="find-password" href="">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
