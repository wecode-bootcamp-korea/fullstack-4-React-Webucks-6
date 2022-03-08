import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
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

  const checkValid = (opacity, isActive) => {
    setOpacity(opacity);
    setIsActive(isActive);
  };

  useEffect(() => {
    email.includes('@') && password.length >= 7
      ? checkValid(1, false)
      : checkValid(0.5, true);
  }, [email, password]);

  function goToLists() {
    if (isActive === false) return navigate('/main-minkyoungkim');
  }

  const handleLogin = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result =>
        isActive === false && result.token
          ? goToLists()
          : alert('로그인 실패!!')
      );
  };

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
            // onKeyUp={() => isLoginPassed(inputs)}
          />
        </div>
        <button
          className={`${styles.loginBtn}`}
          disabled={isActive}
          style={{ opacity: opacity }}
          type="submit"
          // onClick={goToLists}
          onClick={handleLogin}
        >
          로그인
        </button>
        <Link to="/signUp" className={styles.forgetPW}>
          비밀번호를 잊으셨나요?
        </Link>
      </section>
    </main>
  );
}

export default Login;
