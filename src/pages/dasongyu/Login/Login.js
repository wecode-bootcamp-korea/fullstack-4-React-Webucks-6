import React from 'react'
import './Login.scss'


function LoginComponent() {
  return (
    <div>
      <div className="login-box">
        <h1>WeBucks</h1>
      <div className="login-input">
        <input type="text" id="input-id" placeholder="전화번호,사용자 이름 또는 이메일"></input>
        <input type="password" id="input-pw" placeholder="비밀번호" minlength = "8" ></input>
      </div>
      <div className="login-button">
        <button id="button" disabled="disabled" onclick="">로그인</button>
      </div>
      <p className="isfind-pw">비밀번호를 잊으셨나요?</p>
    </div>


    </div>
  );
}

export default LoginComponent;
