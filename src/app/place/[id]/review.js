import Link from "next/link";
import BarGraph from "./barGraph";

export default function Review({placeId, comment, sum}) {

    /**
     * 별점 표시
     * @param num : 별점
     * @returns 
     */
    const renderStars = (num) => {
        const maxRating = 5; // 최대 점수
        const stars = [];
    
        for (let i = 1; i <= maxRating; i++) {
          stars.push(
            <span
              key={i}
              style={{
                color: i <= num ? '#F2A96C' : '#d9d9d9',
                fontSize: '11px'
              }}
            >
              <i class="fa-solid fa-star"></i>
            </span>
          );
        }
    
        return stars;
    };

    let avg = parseInt(sum / comment.length);

    return (
        <>
            <div id="average">
                <div>
                    <h5>후기 {comment.length}</h5>
                    <h3>{avg}</h3>
                    {renderStars(avg)}
                </div>

                <div id="barGraph">
                    <BarGraph comment={comment}/>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                최신등록순
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">최신등록순</a></li>
                    <li><a className="dropdown-item" href="#">별점높은순</a></li>
                    <li><a className="dropdown-item" href="#">별점낮은순</a></li>
                </ul>
            </div>

            {comment.map((item) => (
                <div id="comment">
                    <p className="small-font">{renderStars(item.star)}</p>
                    <p>{item.userId} | {item.dateTime}</p>
                    <p>
                        {item.comment} 
                        <Link href={"/place/"+ placeId + "/review/" + item.id} className="small-font"> ...더보기</Link>
                    </p>
                </div>
            ))}
        </>
    )
}