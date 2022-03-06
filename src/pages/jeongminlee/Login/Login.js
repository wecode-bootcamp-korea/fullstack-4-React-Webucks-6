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
          className={
            ID.includes('@') && password.length >= 5
              ? 'ActivatedButton'
              : 'Button'
          }
        >
          로그인
        </button>
        <div className="Find_Password">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}

export default Login;
