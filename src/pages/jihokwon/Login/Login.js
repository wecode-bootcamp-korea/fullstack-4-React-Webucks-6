import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginComponent() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [loginBtnColor, setLoginBtnColor] = useState('#add3ea');

  // 로그인 조건함수
  const isBtnActive = id.includes('@') && pw.length > 4;
  //useState 없이 계산이 가능한 상태들은 useState를 사용하지 않고 로직을 짜는게 좋다!

  const navigate = useNavigate();
  const goToList = () => {
    navigate('/list-jihokwon');
  };

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
              disabled={!isBtnActive}
              onClick={() => {
                goToList();
                handleLogin();
              }}
              style={{ backgroundColor: loginBtnColor }}
              type="button"
              // 새로고침되어 콘솔창이 리셋되는 것을 방지하기 위해 디폴트 값을 버튼으로 주는 것이 좋다.
              // 버튼의 기본 디폴트 값은 summit 이다.
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
