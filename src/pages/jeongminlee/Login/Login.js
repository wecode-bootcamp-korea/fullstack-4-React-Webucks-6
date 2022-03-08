import './Login.scss';
import '../../../styles/reset.scss';
import { useState } from 'react';

function Login() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleIdInput = e => {
    setID(e.target.value);
  };

  const hadnlePasswordInput = e => {
    setPassword(e.target.value);
  };

  //회원가입 해주는 함수
  const handleJoin = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: ID,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  //로그인 해주는 함수
  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: ID,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  return (
    <div className="body_Login">
      <div className="basis">
        <div className="logo_login">WeBucks</div>
        <input
          onChange={handleIdInput}
          className="ID"
          type="text"
          placeholder=" 전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={hadnlePasswordInput}
          className="Password"
          type="Password"
          placeholder="비밀번호"
        />
        <button
          onClick={handleLogin}
          className={
            ID.includes('@') && password.length >= 5
              ? 'ActivatedButton'
              : 'Button'
          }
        >
          로그인
        </button>
        <button onClick={handleJoin}>회원가입</button>
        <div className="Find_Password">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}

export default Login;
