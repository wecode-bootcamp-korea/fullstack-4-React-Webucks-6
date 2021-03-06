import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginComponent() {
  const navigate = useNavigate();

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
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input type="password" placeholder="비밀번호" />
            <button onClick={goToList}>로그인</button>
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
