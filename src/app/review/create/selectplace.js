import React, { useState, useRef, useEffect } from 'react';
import SearchModal from './searchmodal'
import { getData } from '@/app/util';

export default function SelectPlace({ value, onChange }) {
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

  const [selectedValue, setSelectedValue] = useState(value);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

      /** 비짓제주 api 전체 페이지 가져오기 */
    const [data, setData] = useState([]);
    let addData = [];   // 여기에 비동기로 데이터 축적
    
      useEffect(() => {
          const api = process.env.NEXT_PUBLIC_API_KEY
          
      
          for (let i = 1; i < 3; i++) {
              // let i = 1
              const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&page=${i}`
              getData(url)
              .then((resp) => {
                  let items = resp.items
                  let newData = items.filter(item => item.alltag != null); // data에서 유효한 데이터만 필터링
                  return newData;
              })
              .then(newData => {
                  addData.push(...newData)
                  setData(addData);
              })        
          }
  
      }, [])

  const places = data;

  const closeBtn = {
    'background-color':'#fff',
    'font-size':'15px',
    'color':'#F2A96C',
    'width':'50px',
    'height':'40px',
    'border':'1px solid #F2A96C',
    'border-radius':'20px'
  }
  
  const selectBtn = {
    'background-color':'#F2A96C',
    'font-size':'15px',
    'color':'#fff',
    'width':'60px',
    'height':'40px',
    'border-radius':'20px'
  }


  let selectedPlace = places.find(place => place.contentsid === selectedValue);
  
  return (
    <div id='selectPlaceContainer'>
      <div className='wrap'>
        <button type='button' id='selectPlace' onClick={openModal}>
          {selectedPlace?
          <img id='selectedPlaceImg' src={selectedPlace.repPhoto.photoid.thumbnailpath} />:
          <i class="fa-solid fa-magnifying-glass fa-2xl" style={{"color":"#ffffff"}}></i>}
          
        </button>
        <br />
        {selectedPlace
        ?<label id='selectPlaceLbl' htmlFor='selectPlace' style={{color:'#000'}}>
          {selectedPlace.title}
        </label>
        :<label id='selectPlaceLbl' htmlFor='selectPlace'>
          장소를 선택하세요.
        </label>}
      </div>

      <div
          id="myModal"
          className={`modal ${isModalOpen ? 'show' : ''}`}
          tabIndex="-1"
          style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog" style={{'width':'310px','height':'580px'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">장소 선택</h5>
              {/* <button className="btn-close" onClick={closeModal}></button> */}
            </div>

            <div className="modal-body">
              <SearchModal places={places} onRadioChange={handleRadioChange} myInputRef={myInputRef} />
            </div>

            <div className="modal-footer">
              {/* <button type='button' class="btn closeBtn" style={closeBtn} onClick={closeModal}>닫기</button> */}
              <button type="button" class="btn selectBtn" style={selectBtn} onClick={closeModal}>
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}