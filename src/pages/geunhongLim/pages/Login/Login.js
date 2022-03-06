import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [password, setPassword] = useState('');

  const goToList = () => {
    navigate('/main-geunhongLim');
  };

  const handleIdInput = event => {
    return event.target.value;
  };
  return (
    <section className={styles.loginBox}>
      <figure className={styles.ghLogo}>
        <img src="images/logo.png" alt="logo" />
      </figure>
      <div className={styles.loginFormBox}>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={event => {
            setIdValue(handleIdInput(event));
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={event => {
            setPassword(handleIdInput(event));
          }}
        />
        <button
          disabled={
            idValue.includes('@') && password.length >= 5 ? false : true
          }
          style={{
            opacity: idValue.includes('@') && password.length >= 5 ? 1 : 0.5,
          }}
          onClick={event => {
            goToList();
          }}
        >
          로그인
        </button>
      </div>
      <div className={styles.lostPasswordBox}>
        <Link to="/" className={styles.ghLink}>
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </section>
  );
}

export default Login;
