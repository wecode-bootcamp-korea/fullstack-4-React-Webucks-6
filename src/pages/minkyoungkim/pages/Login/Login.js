import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(0.5);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleInput = event => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const loginBtn = data => {
    data.email.includes('@') && data.password.length >= 7
      ? goToLists()
      : alert('이메일형식에 @가 들어가있나요? / 비밀번호 7자이상인가요?');
  };

  function goToLists() {
    navigate('/main-minkyoungkim');
  }

  return (
    <main className={styles.main}>
      <section className={styles.loginWrapper}>
        <h1 className={styles.logo}>WeBucks</h1>
        <div className={styles.loginInputContainer}>
          <input
            value={email || ''}
            onChange={handleInput}
            name="email"
            className={styles.email}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            value={password}
            onChange={handleInput}
            className={styles.password}
            type="password"
            name="password"
            placeholder="비밀번호"
          />
        </div>
        <button
          className={`${styles.loginBtn}`}
          type="submit"
          onClick={() => {
            loginBtn(inputs);
          }}
        >
          로그인
        </button>
        <Link to="/signUp" className={styles.forgetPW}>
          {' '}
          비밀번호를 잊으셨나요?
        </Link>
      </section>
    </main>
  );
}

export default Login;
