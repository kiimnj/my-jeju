import {useState, useCallback} from "react";
import UploadProfileImg from "./uploadprofileimg";
import { getData } from "@/app/util";
import { useRouter } from "next/navigation";

export default function Register () {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");
    let router = useRouter();

    // 회원가입 폼 제출 처리
    async function handleSignup(e) {
        try {
            e.preventDefault();
            const _error = {};

            // 이메일 검사
            if(!email.includes('@') || email.trim().length < 5) {
                _error.email = '이메일 형식이 올바르지 않습니다.';
            }

            // 비밀번호 검사
            if(password.trim().length < 10) {
                _error.password = '10자리 이상 입력해주세요.'
            }

            //비밀번호 확인
            if (confirmPwd !== password) {
                _error.pwConfrm = '비밀번호가 일치하지 않습니다.'
            }

            // 이메일 중복 확인
            // _error.emailConfirm = checkEmail(email)

            const isError = Object.keys(_error).length > 0;
            if(isError) {
                throw _error;
            }

            // 회원가입 성공
            const response = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                alert("회원가입 되었습니다.");
                router.replace('/account/login');
            } else {
                alert("이메일과 비밀번호를 다시 확인해주세요.");
            }

        } catch(error) {
            setError(error)
        }
    }

    // 이메일 중복 검사
    const checkEmail = (email) => {
        getData(`http://localhost:3001/users?email=${email}`)
        .then(result => {
            if (result.length > 0) {
                return "이미 등록된 이메일입니다. 다시 입력해주세요.";
            } else {
                return
            }
        })
    }

    // console.log(error)

    return (
        <div id="signupFormContainer">
        <form onSubmit={handleSignup} className="">
            <UploadProfileImg />

            <div className="inputWrap">
                <div className='labelWrap'>
                    <label className="label">이메일 아이디</label>
                </div>
                <div className='items'>
                    <input 
                        id="email" 
                        name="email"
                        className="signupInput" 
                        type="email" 
                        placeholder="aaa@aaa.aaa" required 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <button className="authBtn">인증</button>
                    {error && <p className="error">{error.email}</p>}
                </div>
            </div>

            <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">이메일 인증 번호</label>
                </div>
                <div className='items'>
                    <input id="emailAuth" className="signupInput" type="text" placeholder="이메일 인증 번호" />
                    <button className="authBtn">확인</button>
                </div>
            </div>

            <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">비밀번호</label>
                </div>
                <div className='items'>
                    <input 
                        id="pw" 
                        className="signupInput" 
                        type="password" 
                        placeholder="비밀번호" required 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {error && <p className="error">{error.password}</p>}
                </div>
            </div>

            <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">비밀번호 확인</label>
                </div>
                <div className='items'>
                    <input 
                        id="checkPw" 
                        className="signupInput" 
                        type="password" 
                        placeholder="비밀번호 확인"
                        onChange={(e) => setConfirmPwd(e.target.value)}
                    />
                    {error && <p className="error">{error.pwConfrm}</p>}
                </div>
            </div>


            <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">닉네임</label>
                </div>
                    <div className='items'>
                        <input 
                            id="nickname" 
                            className="signupInput" 
                            type="text" 
                            placeholder="닉네임" 
                        />
                    </div>
                    <div>{emailMsg}</div>
                </div>

                <div className='inputWrap'>
                    <div className='labelWrap'>
                        <label className="label">성별</label>
                        {/* <input id="gender" className="signupInput" type="" placeholder="닉네임" /> */}
                        <div>
                            <select 
                                class="signupInput" 
                                id="gender" 
                                name="gender"
                            >
                                <option value="">선택</option>
                                <option value="남">남</option>
                                <option value="여">여</option>
                            </select>
                        </div>
                    </div>
                </div>

                <br />
                
                <div>
                    <button type='submit' className="signupBtn items">회원가입</button>
                </div>
            </form>
        </div>

    );
}