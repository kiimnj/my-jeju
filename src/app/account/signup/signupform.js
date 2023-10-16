import UploadProfileImg from './uploadprofileimg'

export default function SignupForm() {
// userid(AT, INT, not null), 
// password(VARCHAR, not null), 
// email(VARCHAR, not null), 
// nickname(VARCHAR, not null), 
// gender(VARCHAR), 
// X phone(VARCHAR), 
// profileimg(VARCHAR)
  
    return (
      <div id="signupFormContainer">
            <form>
                <UploadProfileImg />
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">이메일 아이디</label>
                </div>
                    <div className='items'>
                        <input id="email" className="signupInput" type="email" placeholder="aaa@aaa.aaa" required />
                        <button id='authBtn' className="signupInput">인증</button>
                    {/* 본인 인증을 하면 중복 확인까지 해주기 */}
                    </div>
                </div>

                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">이메일 인증 번호</label>
                </div>
                    <div className='items'>
                        <input id="emailAuth" className="signupInput" type="text" placeholder="이메일 인증 번호" required />
                        <button id='authBtn' className="signupInput">확인</button>
                    </div>
                </div>
                
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">비밀번호</label>
                </div>
                    <div className='items'>
                        <input id="pw" className="signupInput" type="password" placeholder="비밀번호" required />
                        {/* .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/) */}
                        {/* 최소 10자 이상, 최대 25자 이하/ 적어도 하나의 영문자(a-z 또는 A-Z)를 포함/ 적어도 하나의 특수 문자(!, @, #, $, %, ^, *, +, =, -)를 포함/ 적어도 하나의 숫자(0-9)를 포함 */}
                    </div>
                </div>
                
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">비밀번호 확인</label>
                </div>
                    <div className='items'>
                        <input id="checkPw" className="signupInput" type="password" placeholder="비밀번호 확인" required />
                    </div>
                </div>
                
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">닉네임</label>
                </div>
                    <div className='items'>
                        <input id="nickname" className="signupInput" type="text" placeholder="닉네임" required />
                    </div>
                </div>

                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">성별</label>
                    {/* <input id="gender" className="signupInput" type="" placeholder="닉네임" /> */}
                    <div>
                        <select class="signupInput" id="gender" name="gender">
                            <option value="" disabled selected>선택</option>
                            <option value="남">남</option>
                            <option value="여">여</option>
                        </select>
                    </div>
                    </div>
                </div>

                <br />
                
                <div>
                    <button className="signupBtn items">회원가입</button>
                </div>
            </form>
        </div>
    )
  }
