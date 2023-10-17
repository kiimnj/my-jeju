import Header from '../accheader'
import LoginForm from './loginform'
import AccountManage from './accountmanage'
import LoginKakao from './kakaologin'



export default function Login() {


    return (
      <div id="loginContainer">
        <Header />
        <div className='accountLogoWrap'>
          <img className='accountLogo' src="/logo.png" alt=""></img>
          <LoginForm />
          <AccountManage />
          <div class="hr-sect">OR</div>
          <LoginKakao />
        </div>
      </div>
    )
  }
  