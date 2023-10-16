import React, { useState, useRef, useEffect } from 'react';
import SearchModal from './searchmodal'

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

  const places = [
    {
      "alltag": "연극제,공연,행사,축제,문화",
      "contentsid": "CNTS_300000000015712",
      "contentscd": {
          "value": "c5",
          "label": "축제/행사",
          "refId": "contentscd>c5"
      },
      "title": " 커피",
      "region1cd": {
          "value": "region1",
          "label": "제주시",
          "refId": "region>region1"
      },
      "region2cd": {
          "value": "11",
          "label": "제주시내",
          "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 일도이동 852",
      "roadaddress": "제주특별자치도 제주시 동광로 69",
      "tag": "연극제,공연,행사,축제,문화",
      "introduction": "전국 최고 연극작이 한 자리에 모이는 대한민국 대표 연극제가 제주에서 개최된다.",
      "latitude": 33.50447690000001,
      "longitude": 126.53519,
      "postcode": null,
      "phoneno": null,
      "repPhoto": {
          "descseo": "제41회 대한민국연극제 제주",
          "photoid": {
              "photoid": 2019022616110,
              "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202306/02/1cf4a89d-2f21-4a92-91ff-560bb2e1c261.jpg",
              "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202306/02/f2cf3132-da9a-4f28-a5c0-2b29bdb938c0.jpg"
          }
      }
  },
  {
      "alltag": "커피,차,생과일에이드,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설",
      "contentsid": "CNTS_000000000020353",
      "contentscd": {
          "value": "c4",
          "label": "음식점",
          "refId": "contentscd>c4"
      },
      "title": "이성필 커피볶는집",
      "region1cd": {
          "value": "region1",
          "label": "제주시",
          "refId": "region>region1"
      },
      "region2cd": {
          "value": "11",
          "label": "제주시내",
          "refId": "region1>11"
      },
      "address": "제주특별자치도 제주시 이도2동 광양8길 1",
      "roadaddress": "제주특별자치도 제주시 이도2동 광양8길 1",
      "tag": "커피,차,생과일에이드,음식,핸드드립커피,아메리카노,카페라떼,바닐라라떼,카푸치노,에스프레소,카페모카,카라멜마끼아또,아포가토,녹차라떼,초코라떼,홍차라떼,고구마라떼,라떼,에이드,레몬에이드,자몽에이드,청포도에이드,주스,망고주스,딸기주스,블루베리주스,파인애플주스,스무디,딸기스무디,망고스무디,블루베리스무디,다즐링,얼그레이,카모마일,페퍼민트,루이보스,더치커피,베이커리,빵,티라미수,케이크,치즈케이크,머핀",
      "introduction": "정성스러운 커피 한 잔",
      "latitude": 33.499733,
      "longitude": 126.52797,
      "postcode": null,
      "phoneno": "064-757-4815",
      "repPhoto": {
          "descseo": "이성필 커피볶는집",
          "photoid": {
              "photoid": 8432,
              "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/7b45ef71-d620-4a80-99b9-66d951ba66e7.jpg",
              "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/788f10f8-e24f-42ff-ac15-f77d5c583e13.jpg"
          }
      }
  }
  ]

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
        <div className="modal-dialog" style={{'width':'300px','height':'580px'}}>
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