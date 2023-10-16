import Link from "next/link";

export default function ProfileTab() {

    return (
      <div id="profileTabContainer">
        <Link id="profileTabLink" href='/mypage/profile'>
        <div className="profileTabImg">
                <img className='profileTabImg' src={'/profile.png'} alt=''/>
        </div>
        <div className="profileTabNick">
                <p className="profileTabNick">닉네임</p>
        </div>
        <div className="chevron">
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        </Link>
      </div>
    )
  }