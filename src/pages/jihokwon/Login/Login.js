import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginComponent() {
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/list-jihokwon');
  };

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [loginBtnColor, setLoginBtnColor] = useState('#add3ea');
  const [btnActive, setBtnActive] = useState(true);

  useEffect(() => {
    idValue.includes('@') && pwValue.length > 4
      ? setBtnActive(false)
      : setBtnActive(true);
  }, [idValue, pwValue]);

  useEffect(() => {
    idValue.includes('@') && pwValue.length > 4
      ? setLoginBtnColor('#3e98f2')
      : setLoginBtnColor('#add3ea');
  }, [idValue, pwValue]);

  function handleIdInput(event) {
    setIdValue(event.target.value);
  }

  function handlePwInput(event) {
    setPwValue(event.target.value);
  }

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
              value={idValue}
              onChange={handleIdInput}
            />
            <input
              className="loginArea_input"
              type="password"
              placeholder="비밀번호"
              value={pwValue}
              onChange={handlePwInput}
            />
            <button
              className="loginArea_btn"
              disabled={btnActive}
              onClick={goToList}
              style={{ backgroundColor: loginBtnColor }}
            >
              로그인
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
