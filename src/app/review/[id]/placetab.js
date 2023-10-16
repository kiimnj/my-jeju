import { getData } from "@/app/util";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default async function PlaceTab ({id}) {
    // const [place, setPlace] = useState();

    const api = process.env.NEXT_PUBLIC_API_KEY
    let placeUrl = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&cid=${id}`
      
    const resp = await getData(placeUrl)
    const place = resp.items[0]
    // useEffect(() => {
    //     getData(placeUrl)
    //     .then(data => setPlace(data.items[0]))
        
    // }, [])
    
    console.log(place)
    let title = place.title;
    let photo = place.repPhoto.photoid.thumbnailpath;

    return (
        <>
            <Link href='/place/:id'>
                <div id="placeTabWrap">
                    <img  id="thumb" src={photo} style={{"width": "60px", "height": "60px"}} />
                    <div className="placeInfo">
                        <div id="title">{title}</div>
                        <div id="score">★★★★★ 5.0</div>
                    </div>
                    <div className="chevronRight">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </Link>
        </>

    )
}