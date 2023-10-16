import Link from "next/link";

export default function AccountManage() {


    return (
      <div id="accountManageContainer">
        <div id="accountManage">
            <Link className="link" href="/account/signup">회원가입</Link>
            <span>&emsp;|&emsp;</span>
            <Link className="link" href="/account/signup">아이디 분실</Link>
            <span>&emsp;|&emsp;</span>
            <Link className="link" href="/account/signup">비밀번호</Link>
        </div>
      </div>
    )
  }
  