import Header from '../accheader'
import './signup.css';
import '../../place/place.css'

export default function SignupLayout({ children }) {
    return (
      <div id="signupContainer">
        <Header />
        {children}
      </div>
    )
  }