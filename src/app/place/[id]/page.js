import { getData } from "@/app/util"
import LikeVisit from "./likeVisit"
import DetailNav from "./detailNav"

// 댓글 정보 받아오기
let comment= [
    {
        id: "id1", userId: "userId1", star: "1", comment: "리뷰입니다!!!!!!!!11", dateTime: "2024.02.13"
    },
    {
        id: "id2", userId: "userId2", star: "4", comment: "리뷰입니다!!!!!!!!22", dateTime: "2023.11.26"
    },
    {
        id: "id3", userId: "userId3", star: "3", comment: "리뷰입니다!!!!!!!!33", dateTime: "2023.02.22"
    },
    {
        id: "id4", userId: "userId4", star: "3", comment: "리뷰입니다!!!!!!!!33", dateTime: "2023.02.22"
    },
    {
        id: "id5", userId: "userId5", star: "3", comment: "리뷰입니다!!!!!!!!33", dateTime: "2023.02.22"
    }
]


export default async function Detail(props) {
    const location = "detail"
    const param = props.params.id
    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&cid=${param}`
    const resp = await getData(url)
    const data = resp.items[0]
    console.log(data)

    // 별점 총 합계
    let sum = 0;
    for(let c of comment) {
        sum += Number(c.star)
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

    let avg = parseInt(sum / comment.length);

    return (
        <>
        
            <img src={data.repPhoto.photoid.imgpath} id="detailImg" width={393} height={400}/>
            <div id="detailContents">
                <div className="title">
                    <div className="info">
                        <p className="small-font">{data.region2cd && data.region2cd.label}</p>
                        <h5>{data.title}</h5>
                        <p className="score">{renderStars(avg)} / {comment.length}개 리뷰</p>
                    </div>
                    <LikeVisit param={param}/>
                </div>
                
                <DetailNav data={data} comment={comment} sum={sum} />
            </div>
        </>
    )
}