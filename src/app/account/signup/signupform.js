'use client'
import UploadProfileImg from './uploadprofileimg'
import { useState, useCallback } from 'react';
// import { useRouter } from 'next/router';

export default function SignupForm() {
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const [emailMsg, setEmailMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg]= useState("")
    const [nicknameMsg, setNicknameMsg] = useState("")

    // const router = useRouter();

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
            setMessage("회원가입 되었습니다.");
            // router.push('http://localhost:3000/place');
            alert(message);
            } else {
            setMessage("이메일과 비밀번호를 다시 확인해주세요.");
            alert(message);
            }
        } catch (error) {
            setMessage("Error !");
            alert(message);
        }
    };

    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
      };
    
      const validatePwd = (password) => {
                {/* 최소 10자 이상, 최대 25자 이하/ 적어도 하나의 영문자(a-z 또는 A-Z)를 포함/ 적어도 하나의 특수 문자(!, @, #, $, %, ^, *, +, =, -)를 포함/ 적어도 하나의 숫자(0-9)를 포함 */}
        return password
            .toLowerCase()
            .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
      }
    
      const validateNickname = (nickname) => {
        return nickname
            .toLowerCase()
            .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/)
      }


    const isEmailValid = validateEmail(email);
    const isPwdValid = validatePwd(password);
    const isConfirmPwd = password === confirmPwd;
    const isNicknameValid = validateNickname(nickname);


       //이메일 
  const onChangeEmail = useCallback( async (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(currEmail)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.")
    } else {
        setEmailMsg("올바른 이메일 형식입니다.")
      }
    })

    //비밀번호
    const onChangePwd = useCallback((e) =>{
      const currPwd = e.target.value;
      setPassword(currPwd);

      if (!validatePwd(currPwd)) {
        setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.")
      } else {
        setPwdMsg("안전한 비밀번호입니다.")
      }
    }, [])

    //비밀번호 확인
    const onChangeConfirmPwd = useCallback((e) => {
      const currConfirmPwd = e.target.value;
      setConfirmPwd(currConfirmPwd);

      if (currConfirmPwd !== password) {
        setConfirmPwdMsg("비밀번호가 일치하지 않습니다.")
      } else {
        setConfirmPwdMsg("올바른 비밀번호입니다.")
      }
    }, [password])

    //닉네임
    const onChangeNickname = useCallback((e) => {
      const currNickname = e.target.value;
      setNickname(currNickname);

      if (!validateNickname(currNickname)) {
        setNicknameMsg("1글자 이상 9글자 미만으로 입력해주세요.")
      } else {
        setNicknameMsg("올바른 닉네임 형식입니다.")
      }
    }, []);

    const [checkMail, setCheckMail] = useState(false)
    const [checkNickname, setCheckNickname] = useState(false)

    const onCheckEmail = async (e) => {
        e.preventDefault();

        try { 
            const resp = await fetch(`http://localhost:3001/users/email`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const result = await resp.json();

        if (!result) {
            setEmailMsg("이미 등록된 이메일입니다. 다시 입력해주세요.");
            setCheckMail(false);
        } else {
            setEmailMsg("사용 가능한 이메일입니다.");
            setCheckMail(true);
        }

        } catch (err) {
        console.log(err);
        }
    }

    const onCheckNickname = async (e) => {
        e.preventDefault();

        try { 
            const resp = await fetch(`http://localhost:3001/users/nickname`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname }),
            });
            const result = await resp.json();


        if (!result) {
            setNicknameMsg("이미 등록된 닉네임입니다. 다시 입력해주세요.");
            setCheckNickname(false);
        } else {
            setNicknameMsg("사용 가능한 닉네임입니다.");
            setCheckNickname(true);
        }

        } catch (err) {
        console.log(err);
        }
    }


  
    return (
      <div id="signupFormContainer">
            <form>
                <UploadProfileImg />
                <div className='inputWrap'>
                <div className='labelWrap'>
                    <label className="label">이메일 아이디</label>
                </div>
                    <div className='items'>
                        <input 
                            id="email" 
                            className="signupInput" 
                            type="email" 
                            placeholder="aaa@aaa.aaa" required 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <button className="authBtn">인증</button>
                    {/* 본인 인증을 하면 중복 확인까지 해주기 */}
                    </div>
                    <div className={isEmailValid ? 'success' : 'error'}>{emailMsg}</div>
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
                    </div>
                </div>
                <div className={isEmailValid ? 'success' : 'error'}>{emailMsg}</div>
                
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
                        />
                    </div>
                    <div className={isEmailValid ? 'success' : 'error'}>{emailMsg}</div>
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
                    <div className={isEmailValid ? 'success' : 'error'}>{emailMsg}</div>
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
                    <button type='submit' onClick={handleSignup} className="signupBtn items">회원가입</button>
                </div>
            </form>
        </div>
    )
  }
