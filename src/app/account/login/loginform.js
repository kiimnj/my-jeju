"use client";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
        setMessage("로그인 되었습니다.");
      } else {
        setMessage("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      setMessage("Error !");
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
  