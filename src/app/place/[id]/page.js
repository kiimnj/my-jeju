import { getData } from "@/app/util"
import LikeVisit from "./likeVisit"
import DetailNav from "./detailNav"
import Header from "../header"


export default async function Detail(props) {
    const location = "detail"
    const param = props.params.id
    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&cid=${param}`
    const reviewUrl = 'http://localhost:3001/review'


    // 관광지 정보
    const resp = await getData(url)
    const data = resp.items[0]
    console.log(data)

    // 해당 관광지에 대한 리뷰
    const review = await getData(`${reviewUrl}?contentsid=${param}`)

    // 별점 총 합계
    let sum = 0;
    for(let c of review) {
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

    let avg = parseInt(sum / review.length);

    return (
        <>
            <Header location={location} />
            <img src={data.repPhoto.photoid.imgpath} id="detailImg" width={393} height={400}/>
            <div id="detailContents">
                <div className="title">
                    <div className="info">
                        <p className="small-font">{data.region2cd && data.region2cd.label}</p>
                        <h5>{data.title}</h5>
                        <p className="score">{renderStars(avg)} / {review.length}개 리뷰</p>
                    </div>
                    <LikeVisit param={param}/>
                </div>
                
                <DetailNav data={data} review={review} sum={sum} />
            </div>
        </>
    )
}