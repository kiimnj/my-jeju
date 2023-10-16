"use client"
import { useState } from "react";

export default function SearchModal({myInputRef, places, onRadioChange}) {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
            setSearch(e.target.value)
        }

    const filterTitle = places.filter((p) => {
        return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })

    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioSelect = (value) => {
      setSelectedOption(value);
      onRadioChange(value);
    };

    const inputStyle = {
        'font-size': '15px',
        'width': '268px',
        'height': '40px',
        'border-radius': '20px',
        'border': '1px solid #d9d9d9',
        'padding' : '15px',
        'padding-left' : '45px'
    }

    return (
        <div id="searchModalContainer">
            <input id="searchBar" type="text" ref={myInputRef} value={search} style={inputStyle} onChange={onChange} placeholder="장소명을 검색하세요." />
            <i id="magnifierIcon" class="fa-solid fa-magnifying-glass"></i>


            <div className="form-check">
                {search !== "" && filterTitle.map((place, index) => (
                    <div key={index}>
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="seletedPlaceId" 
                            id={`flexRadioDefault${index}`}
                            value={place.contentsid}
                            checked={selectedOption === place.contentsid}
                            onChange={() => handleRadioSelect(place.contentsid)}
                        />
                        <div className="searchItem">
                            <label className="form-check-label" htmlFor={`flexRadioDefault${index}`}>
                                {/* <div className="searchImgWrap"> */}
                                    <img className="searchImg" src={place.repPhoto===null?null:place.repPhoto.photoid.thumbnailpath} />
                                    {/* </div> */}
                                <div className="searchInfo">
                                    <div>
                                    <div className="searchTitle">{place.title}</div>
                                    <div className="searchStar">★★★☆☆ 3.5</div>
                                </div>
                                </div>
                            </label>
                        </div>
                    </div>
                ))}
            </div>


      </div>
    )
  }