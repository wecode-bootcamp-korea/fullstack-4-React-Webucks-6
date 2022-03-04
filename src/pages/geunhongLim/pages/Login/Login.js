import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate('/main-geunhongLim');
  };
  return (
    <section className={styles.loginBox}>
      <figure className={styles.logo}>
        <img src="images/logo.png" alt="logo" />
      </figure>
      <form className={styles.loginFormBox}>
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input type="password" placeholder="비밀번호" />
        <button
          onClick={() => {
            goToList();
          }}
        >
          로그인
        </button>
      </form>
      <div className={styles.lostPasswordBox}>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    </section>
  );
}

export default Login;
