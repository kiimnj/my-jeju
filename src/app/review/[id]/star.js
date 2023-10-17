
export default function Star({star}) {
//회색 별을 누르면 왼쪽부터 그 지점까지 주황이 되고, 주황 별 개수만큼 점수가 됨

  const renderStars = (num) => {
    const maxRating = 5; // 최대 점수
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= num ? '#F2A96C' : '#d9d9d9',
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
        {renderStars(star)}&ensp;
        {star === 0?<span style={{color:"#d9d9d9"}}>{star}</span>:<span style={{color:"#000"}}>{star}</span>}
        </div>
    </div>
  );
}