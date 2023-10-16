import UploadProfileImg from '../../account/signup/uploadprofileimg'
import Link from 'next/link'

export default function ProfileForm() {
// userid(AT, INT, not null), 
// password(VARCHAR, not null), 
// email(VARCHAR, not null), 
// nickname(VARCHAR, not null), 
// gender(VARCHAR), 
// profileimg(VARCHAR)
  
    return (
      <div id="profileFormContainer">
            <form>
                <UploadProfileImg />
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">이메일 아이디</label>
                </div>
                    <div className='items'>
                        <input id="email" className="modifyInput" type="email" placeholder="aaa@aaa.aaa" required />
                    </div>
                </div>
                
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">닉네임</label>
                </div>
                    <div className='items'>
                        <input id="nickname" className="modifyInput" type="text" placeholder="닉네임" required />
                    </div>
                </div>

                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">성별</label>
                    {/* <input id="gender" className="modifyInput" type="" placeholder="닉네임" /> */}
                    <div>
                        <select class="modifyInput" id="gender" name="gender">
                            <option value="" disabled selected>선택</option>
                            <option value="남">남</option>
                            <option value="여">여</option>
                        </select>
                    </div>
                    </div>
                </div>

                <br />
                
                <div className='items'>
                    <Link href='/mypage'><button className="backBtn">취소</button></Link>
                    <button className="modifyBtn">정보 변경</button>
                </div>

                <div className='items'>
                    <Link href='/mypage/profile/modifypw'><button className="modifyBtn">비밀번호 변경</button></Link>
                    <Link href='/account/withdraw'><button className="modifyBtn">회원 탈퇴</button></Link>
                </div>
            </form>
        </div>
    )
  }
