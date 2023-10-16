import Link from "next/link";
import BarGraph from "./barGraph";
import { useEffect, useState } from "react";

export default function Review({placeId, review, sum}) {
    const [sort, setSort] = useState("recent");

    if(sort == "starDesc") {
        let stardesc = review.sort((a, b) => b.star - a.star)
        review = stardesc;
    } else if(sort == "starAsc") {
        let starAsc = review.sort((a, b) => a.star - b.star)
        review = starAsc;
    } else if (sort == "recent") {
        let recent = review.sort((a, b) => a.id - b.id)
        review = recent;
    }


    // console.log(review)
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

    let avg = parseInt(sum / review.length);

    return (
        <>
            <div id="average">
                <div>
                    <h5>후기 {review.length}</h5>
                    <h3>{review.length > 0 ? avg : 0}</h3>
                    {renderStars(avg)}
                </div>

                <div id="barGraph">
                    <BarGraph review={review}/>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {sort == "recent" && "최신등록순"}
                {sort == "starDesc" && "별점높은순"}
                {sort == "starAsc" && "별점낮은순"}
                </button>
                <ul className="dropdown-menu">
                    <li><p className="dropdown-item" onClick={() => setSort("recent")}>최신등록순</p></li>
                    <li><p className="dropdown-item" onClick={() => setSort("starDesc")}>별점높은순</p></li>
                    <li><p className="dropdown-item" onClick={() => setSort("starAsc")}>별점낮은순</p></li>
                </ul>
            </div>

            {review.map((item) => (
                <div id="review">
                    <p className="small-font">{renderStars(item.star)}</p>
                    <p>{item.userId} | {item.dateTime}</p>
                    <p>
                        {item.comment} 
                        <Link href={"/review/" + item.id} className="small-font"> ...더보기</Link>
                    </p>
                </div>
            ))}
        </>
    )
}