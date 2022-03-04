import './Login.scss';
import '../../../styles/reset.scss';
// import React from 'react';

function Login() {
  return (
    <div className="body_Login">
      <div className="basis">
        <div className="logo_login">WeBucks</div>
        <input
          className="ID"
          type="text"
          placeholder=" 전화번호, 사용자 이름 또는 이메일"
        />
        <input className="Password" type="Password" placeholder=" 비밀번호" />
        <button className="Button">로그인</button>
        <div className="Find_Password">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}

export default Login;
