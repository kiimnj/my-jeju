export default function LoginForm() {


    return (
      <div id="loginFormContainer">
            <form>
                <input className="loginInput" type="email" placeholder="이메일" />
                <input className="loginInput" type="password" placeholder="비밀번호" />
                <button className="loginBtn">로그인</button>
            </form>
      </div>
    )
  }
  