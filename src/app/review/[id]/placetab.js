import { getData } from "@/app/util";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PlaceTab ({place}) {
    // let [on, setOn] = useState("d-info");
    // let title = place.title;
    // let placeId = place.contentsid;
    // let photo = item.repPhoto.photoid.thumbnailpath;
    // let newTag = place.tag.split(",");
    // let hashTag = newTag.map(tag => "#" + tag.trim() + " ");;
    // let address = place.address;
    // let roadaddress = place.roadaddress;
    // let phone = place.phoneno;
    // let position = [{title: place.title, lat: place.latitude, lng: place.longitude}];
    // let center = {lat: place.latitude, lng: place.longitude};
    // let level = 5;

    return (
        <>
            <Link href='/place/:id'>
                {/* <div id="placeTabWrap">
                    <img  id="thumb" src={photo} style={{"width": "60px", "height": "60px"}} />
                    <div className="placeInfo">
                        <div id="title">title</div>
                        <div id="score">★★★★★ 5.0</div>
                    </div>
                    <div className="chevronRight">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div> */}
            </Link>
        </>

    )
}