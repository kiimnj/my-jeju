"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let userInfo = localStorage.getItem("user")
    if(userInfo) {
      router.push('/place');
    }
  }, [user])



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();

        const user = data.find((user) => user.email === email && user.password === password);
        
        if (user) {
          setMessage("로그인 되었습니다.");
          localStorage.setItem("user", email)
          router.replace('/place')
        }

      } catch (error) {
        setMessage("비밀번호가 일치하지 않습니다.");

      } finally {
        if(message != "") {
          alert(message)
        }
      }
    };


    return (
      <div id="loginFormContainer">
            {message}
            <form>
                <input 
                  className="loginInput" 
                  type="email" 
                  placeholder="이메일"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                  className="loginInput" 
                  type="password" 
                  placeholder="비밀번호" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={handleLogin} className="loginBtn">로그인</button>
            </form>
      </div>
    )
  }
  