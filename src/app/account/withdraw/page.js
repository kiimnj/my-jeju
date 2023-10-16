import Link from "next/link";

export default function Withdraw() {

  return (
    <div id="withdrawContainer">
      <div className='accountLogoWrap'>
        <img className='accountLogo' src="/logo.png" alt="" />
      </div>
        <div>정말 마이 제주 회원을 탈퇴하시겠습니까?</div>
        <form>
          <Link href='/account/withdraw/withdrawn'><button>탈퇴</button></Link>
          <Link href='/mypage/profile'><button>취소</button></Link>
        </form>
    </div>
  )
}