import { useState, useRef } from "react";

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
  
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className='imageContainer'>
        <div id='imageContainer'>
        <div className="form-signup">
          <div id='imageSlide'>
            {/* <label id='selectImg' onChange={handleAddImages} className="images" htmlFor="profileImg">
              <i class="fa-solid fa-plus fa-2xl" style={{"color":"#ffffff", "padding-top":"60px"}}></i>
            </label> */}
            <label htmlFor="selectImg" className='images' onChange={handleAddImages}>
              <i class="fa-solid fa-plus fa-2xl" style={{"color":"#ffffff", "padding-top":"60px"}}></i>
              <input type="file" multiple 
                accept="image/*"
                id="selectImg" 
                className='images' 
              />
            </label>

            {/* <img
              className='images'
              src={imgFile}
              alt=""
              style={{'width':'120px'}}
            /> */}
            {showImages.map((image, id) => (
              <div className='imageWrap' key={id}>
                <img className='images' src={image} />
                <button type="button" className="deleteBtn" onClick={() => handleDeleteImage(id)}><i class="fa-solid fa-x"></i></button>
              </div>
            ))}
          </div>
          <span id="imageCnts">{showImages.length} / 5</span>

          <div className="addMent">{showImages.length===0?'이미지를 업로드하세요.':''}</div>
          
          {/* <input
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
          /> */}
        </div>
      </div>

      {/* <label htmlFor="input-file" className='images' onChange={handleAddImages}>
        <input type="file" id="input-file" multiple className='images' />
        <span>사진추가</span>
      </label> */}

      {/* // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
      {/* {showImages.map((image, id) => (
        <div className='images' key={id}>
          <img className='images' src={image} />
          <button className="deleteImg btn-close" onClick={() => handleDeleteImage(id)}></button>
        </div>
      ))} */}


    </div>
  );
};