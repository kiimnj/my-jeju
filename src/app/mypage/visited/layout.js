import './mypage.css';
import Header from "../account/accheader"

export default function MyPageLayout({ children }) {
    return (
      <div id="myPageLayout">
        <Header />
        {children}
      </div>
    )
  }