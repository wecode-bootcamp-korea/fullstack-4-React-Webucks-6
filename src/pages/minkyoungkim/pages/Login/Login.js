import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss'

function Login() {
    const navigate = useNavigate();
    function goToLists(){
        navigate('/list');
    }


    return (
        <>
            <main>
                <section className="login-wrapper">
                    <h1 className="logo">WeBucks</h1>
                    <div className="loginInput-container">
                        <input name="email" className="email" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input id="password" type="password"  placeholder="비밀번호" />
                    </div>
                    <button className="loginBtn" type="submit"  onClick={()=>{goToLists()}}>로그인</button>
                    <Link to="/signUp" className="forgetPW">비밀번호를 잊으셨나요?</Link>
                </section>
            </main>
        </>
    );
}

export default Login;