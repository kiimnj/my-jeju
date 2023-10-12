import { getData } from "@/app/util"
import LikeVisit from "./likeVisit"
import Review from "./review"
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

    // 별점 총 합계
    let sum = 0;
    for(let c of comment) {
        sum += Number(c.star)
    }
    
    /**
     * 평균 별점 표시
     * @param {*} sum : 평균을 구할 별점들의 합계
     * @param {*} length : 평균을 구할 데이터의 갯수
     * @returns 
     */
    const avgStar = (sum, length) => {
        let avg = parseInt(sum / length);
        let bel = 5 - avg
    
        return (
            <>
                {Array(avg).fill().map(() => (
                    <span>★</span>
                ))
                }{
                Array(bel).fill().map(() => (
                    <span>☆</span>
                ))}
            </>
        )
    }

    return (
        <>
            <img src={data.repPhoto.photoid.imgpath} id="detailImg" width={393} height={400}/>
            <div id="detailContents">
                <div className="title">
                    <div className="info">
                        <p className="small-font">{data.region2cd.label}</p>
                        <h5>{data.title}</h5>
                        <p className="score">{avgStar(sum, comment.length)} / {comment.length}개 리뷰</p>
                    </div>
                    <LikeVisit />
                </div>
                
                {/* <ul className="nav nav-pills">
                    <li className="nav-item">
                        <input type="radio" name="nav" id="d-explain" checked/>
                        <label for="d-explain">관광정보</label>
                    </li>
                    <li className="nav-item">
                        <input type="radio" name="nav" id="d-contact"/>
                        <label for="d-contact">주소/연락처</label>
                    </li>
                    <li className="nav-item">
                        <input type="radio" name="nav" id="d-map"/>
                        <label for="d-map">위치/교통</label>
                    </li>
                    <li className="nav-item">
                        <input type="radio" name="nav" id="d-review"/>
                        <label for="d-review">평점/후기</label>
                    </li>
                </ul>

                <Review /> */}
                <DetailNav data={data} comment={comment} avgStar={avgStar} sum={sum} />
            </div>
        </>
    )
}