import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  function goToLists() {
    navigate('/main-minkyoungkim');
  }

  return (
    <main className={styles.main}>
      <section className={styles.loginWrapper}>
        <h1 className={styles.logo}>WeBucks</h1>
        <div className={styles.loginInputContainer}>
          <input
            name="email"
            className={styles.email}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className={styles.password}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <button
          className={styles.loginBtn}
          type="submit"
          onClick={() => {
            goToLists();
          }}
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
