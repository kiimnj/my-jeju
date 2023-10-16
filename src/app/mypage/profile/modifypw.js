

export default function ModifyPw() {

    return (
      <div id="modifyPwContainer">
        <div className='inputWrap'>
        <div className='labelWrap'>
            <label className="label">비밀번호</label>
        </div>
            <div className='items'>
                <input id="pw" className="modifyInput" type="password" placeholder="비밀번호" required />
            </div>
        </div>

        <div className='inputWrap'>
        <div className='labelWrap'>
            <label className="label">비밀번호 확인</label>
        </div>
            <div className='items'>
                <input id="checkPw" className="modifyInput" type="password" placeholder="비밀번호 확인" required />
            </div>
        </div>
      </div>
    )
  }