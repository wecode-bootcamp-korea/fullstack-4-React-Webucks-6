import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const [loginable, setLoginable] = useState(false);

  const goToList = () => {
    navigate('/main-geunhongLim');
  };

  const handleInput = event => {
    return event.target.value;
  };

  useEffect(() => {
    console.log('확인');
    loginable ? buttonOn() : buttonOff();
  }, [loginable]);

  const buttonOn = () => {
    setDisable(false);
    setOpacity(1);
  };

  const buttonOff = () => {
    setOpacity(0.5);
    setDisable(true);
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
            setIdValue(handleInput(event));
            setLoginable(idValue.includes('@') && password.length >= 5);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={event => {
            setPassword(handleInput(event));
            setLoginable(idValue.includes('@') && password.length >= 5);
          }}
        />
        <button
          disabled={disable}
          style={{
            opacity: opacity,
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
