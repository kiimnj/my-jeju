"use client";
import React, { useEffect, useState } from 'react';

  export default function LoginKakao() {
    const [isLogged, setIsLogged] = useState(false);
    const [profileNickname, setProfileNickname] = useState("");
    const kakaoLoginKey = process.env.NEXT_PUBLIC_KAKAOLOGIN_KEY

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        script.onload = () => {
            if (window.Kakao) {
                window.Kakao.init(kakaoLoginKey);
                checkKakaoLoginStatus();
            }
        };
        document.body.appendChild(script);
    }, []);

    const checkKakaoLoginStatus = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    if (kakao_account) {
                        const nickname = kakao_account.profile.nickname;
                        if (nickname) {
                            setProfileNickname(nickname);
                        }
                    }
                }
            });
            setIsLogged(true);
        }
    };

    const kakaoLogin = () => {
        if (window.Kakao) {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, account_email, gender',
                success: function (authObj) {
                    console.log(authObj);
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: res => {
                            const kakao_account = res.kakao_account;
                            if (kakao_account) {
                                const nickname = kakao_account.profile.nickname;
                                if (nickname) {
                                    setProfileNickname(nickname);
                                }
                            }
                            setIsLogged(true);
                            alert('카카오톡 계정으로 로그인 되었습니다.');
                        }
                    });
                }
            });
        }
    };

    // const kakaoLogout = () => {
    //     if (window.Kakao.Auth.getAccessToken()) {
    //         window.Kakao.Auth.logout(function() {
    //             setIsLogged(false);
    //             setProfileNickname("");
    //             alert('로그아웃 되었습니다.');
    //         });
    //     }
    // };

    return (
        <div>
            <button onClick={kakaoLogin} id="kakaoLoginBtn">
                <i class="fa-solid fa-comment"></i>&ensp;
                카카오톡 계정으로 로그인
            </button>
        </div>
    );
}