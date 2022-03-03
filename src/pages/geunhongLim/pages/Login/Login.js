import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate('/main-geunhongLim');
  };
  return (
    <section className="login-box">
      <figure className="logo">
        <img src="images/logo.png" alt="logo" />
      </figure>
      <form className="login-form-box">
        <input
          type="text"
          className="login-id-input"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          className="login-password-input"
          placeholder="비밀번호"
        />
        <button
          onClick={() => {
            goToList();
          }}
        >
          로그인
        </button>
      </form>
      <div className="lost-password-box">
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    </section>
  );
}

export default Login;
