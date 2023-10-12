import React, { useState, useRef, useEffect } from 'react';

export default function SelectPlace() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const myInputRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      myInputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div>
      <div className='wrap'>
        <button id='selectPlace' onClick={openModal}>
          <i class="fa-solid fa-magnifying-glass fa-2xl" style={{"color":"#ffffff"}}></i>
        </button>
        <br />
        <label id='selectPlaceLbl' htmlFor='selectPlace'>장소를 선택하세요.</label>
      </div>

      <div
        id="myModal"
        className={`modal ${isModalOpen ? 'show' : ''}`}
        tabIndex="-1"
        style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        
        <div className="modal-dialog" style={{ 'width': '300px','height': '580px'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">장소 선택</h5>
              <button className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <form
                id="myInput"
                ref={myInputRef}
                type="text"
                placeholder="포커스 맞출 입력란">
                <label className="signup-profileImg-label" htmlFor="profileImg">프로필 이미지 추가</label>
                <input
                className="signup-profileImg-input"
                type="file"
                accept="image/*"
                id="profileImg"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button class="btn btn-secondary" onClick={closeModal}>닫기</button>
              <button type="button" class="btn btn-primary">선택</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}