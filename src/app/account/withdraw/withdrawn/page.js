import Link from "next/link";

export default function Withdrawn() {

    return (
      <div id="withdrawnContainer">
        <div className='accountLogoWrap'>
          <Link href='/place'><img className='accountLogo' src="/logo.png" alt="" /></Link>
        </div>
        <div>
          <p>마이제주 회원 탈퇴가 완료되었습니다.</p>
          <p>그동안 이용해주셔서 감사합니다.</p>
        </div>
      </div>
    )
  }