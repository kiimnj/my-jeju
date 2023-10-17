import { useState, useEffect } from "react";
import { getData } from "../util";


export default function Card ({id, title, photo, thumb, tag, script}) {
    let newTag = tag.split(",").slice(0, 3)
    let hashTag = newTag.map(tag => "#" + tag.trim() + " ");

    const [reviews, setReviews] = useState();
    const reviewUrl = `http://localhost:3001/review?contentsid=${id}`
    useEffect(() => {
      getData(reviewUrl)
      .then(data => {
        setReviews(data)
        // console.log(data)
      })
    })

    // console.log(hashTag)


    if(title.includes("<")) {
        title = title.substring(0, title.indexOf("<"))
    } else if (title.includes("[")) {
        title = title.substring(0, title.indexOf("]") + 1)
    }

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

    let avg = 0;
    if(reviews) {
      let starSum = 0;
      for(let r of reviews) {
        starSum += Number(r.star)
      }
      avg = Math.round(starSum/reviews.length)
    }

    return (
        
        <div className="card" style={{"width": "170px", "height": "270px", "flexShrink":"0"}}>
            <img src={photo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="title">{title}</p>
                <div className="under">
                    <p className="star">{renderStars(avg)}</p>
                    <p className="hashtag">{hashTag}</p>
                </div>
            </div>
        </div>
    )

}