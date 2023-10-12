import Link from "next/link";
import BarGraph from "./barGraph";

export default function Review({placeId, comment, avgStar, sum}) {
    console.log(comment)

    
    /**
     * 별점 표시
     * @param {*} num : 별점
     * @returns 
     */
    const star = (num) => {
        let fill = parseInt(num);
        let bel = 5 - fill
        return (
            <>
                {Array(fill).fill().map(() => (
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
        <div style={{"padding":"20px 0"}}>
            <div id="average">
                <div>
                    <h5>후기 {comment.length}</h5>
                    <h3>3.5</h3>
                    {avgStar(sum, comment.length)}
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
                    <p className="small-font">{star(item.star)}</p>
                    <p>{item.userId} | {item.dateTime}</p>
                    <p>
                        {item.comment} 
                        <Link href={"/place/"+ placeId + "/review/" + item.id} className="small-font"> ...더보기</Link>
                    </p>
                </div>
            ))}
        </div>
    )
}