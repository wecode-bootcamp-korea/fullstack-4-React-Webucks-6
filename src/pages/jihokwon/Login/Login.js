import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginComponent() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [loginBtnColor, setLoginBtnColor] = useState('#add3ea');
  const [btnActive, setBtnActive] = useState(true);
  const navigate = useNavigate();

  function handleIdInput(event) {
    let inputIdValue = event.target.value;
    setIdValue(inputIdValue);
    console.log(inputIdValue.includes('@'));
    return inputIdValue.includes('@');
  }

  function handlePwInput(event) {
    let inputPwValue = event.target.value;
    setPwValue(inputPwValue);
    console.log(inputPwValue.length >= 5);
    return inputPwValue.length >= 5;
  }

  function changeBackgroundColor() {
    console.log(handleIdInput);
    console.log(handlePwInput);

    handleIdInput() === true && handlePwInput() === true
      ? setLoginBtnColor('#3e98f2')
      : setLoginBtnColor('#add3ea');
  }

  const goToList = () => {
    navigate('/list-jihokwon');
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
              value={idValue}
              onChange={event => {
                handleIdInput(event);
                changeBackgroundColor();
                console.log(event.target.value);
              }}
              // onKeyUp={event => {
              //   handleIdInput(event);
              // }}
            />
            <input
              className="loginArea_input"
              type="password"
              placeholder="비밀번호"
              value={pwValue}
              onChange={event => {
                handlePwInput(event);
                changeBackgroundColor();
                console.log(event.target.value);
              }}
              // onKeyUp={event => {
              //   handlePwInput(event);
              // }}
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
