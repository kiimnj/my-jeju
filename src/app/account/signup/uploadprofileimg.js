"use client";
import { useState, useRef } from "react";

export default function UploadProfileImg() {
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();

    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
           };
    };

    return (
      <div className='items' id="uploadProfileImgContainer">
        <div className="profileImgWrap">
            <label className="signup-profileImg-label" htmlFor="profileImg">
            <img className='profileImg' src={imgFile ? imgFile :'/profile.png'} alt='' />
                <p>프로필 이미지 선택</p>
            </label>
        </div>

            <input
                className="signup-profileImg-input"
                type="file"
                accept="image/*"
                id="profileImg"
                onChange={saveImgFile}
                ref={imgRef}
            />
      </div>
    )
  }
  