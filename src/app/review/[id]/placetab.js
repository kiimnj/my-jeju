import { getData } from "@/app/util";
import Link from "next/link";

export default async function PlaceTab ({id, avg}) {

    const api = process.env.NEXT_PUBLIC_API_KEY
    let placeUrl = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&cid=${id}`
    let reviewUrl = 'http://localhost:3001/review'

    const resp = await getData(placeUrl)
    const place = resp.items[0]
    
    // console.log(place)
    let title = place.title;
    let photo = place.repPhoto.photoid.thumbnailpath;

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
    return (
        <>
            <Link href={`/place/${place.contentsid}`}>
                <div id="placeTabWrap">
                    <img  id="thumb" src={photo} style={{"width": "60px", "height": "60px"}} />
                    <div className="placeInfo">
                        <div id="title">{title}</div>
                        <div id="score">{renderStars(avg)} {avg || 0}</div>
                    </div>
                    <div className="chevronRight">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </Link>
        </>

    )
}