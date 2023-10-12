import React, { useState, useRef, useEffect } from 'react';

export default function AddImg() {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImgFile(reader.result);
      };
  };
    return (
      <div id='imageContainer'>
        <form className="form-signup">
          <div id='imageSlide'>
            <label id='selectImg' className="signup-profileImg-label" htmlFor="profileImg">
              <i class="fa-solid fa-plus fa-2xl" style={{"color":"#ffffff", "padding-top":"60px"}}></i>
            </label>
            <img
              className='images'
              src={imgFile}
              alt=""
              style={{'width':'120px'}}
            />
            <img
              className='images'
              src={imgFile}
              alt=""
              style={{'width':'120px'}}
            />
            <img
              className='images'
              src={imgFile}
              alt=""
              style={{'width':'120px'}}
            />
          </div>
          <span id="imageCnts">2 / 5</span>
          <input
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
          />
        </form>
      </div>
    )
  }