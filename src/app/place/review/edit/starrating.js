import React, { useState } from 'react';

export default function StarRating() {
//회색 별을 누르면 왼쪽부터 그 지점까지 주황이 되고, 주황 별 개수만큼 점수가 됨

  const [rating, setRating] = useState(0); // 초기 점수는 0

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const renderStars = () => {
    const maxRating = 5; // 최대 점수
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{
            color: i <= rating ? '#F2A96C' : '#d9d9d9',
            cursor: 'pointer',
          }}
        >
          <i class="fa-solid fa-star"></i>
        </span>
      );
    }

    return stars;
  };

  return (
    <div id="starRating">
      <div style={{textAlign:'center', fontSize:'27px'}}>
        {renderStars()}&ensp;
        {rating === 0?<span style={{color:"#d9d9d9"}}>{rating}</span>:<span style={{color:"#000"}}>{rating}</span>}
        </div>
    </div>
  );
}