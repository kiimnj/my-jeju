"use client"
import { useState } from "react"
import Review from "./review"
import Info from "./info";
import Map from "./map";
import Contact from "./contact";

export default function DetailNav ({data, comment, avgStar, sum}) {
    let [on, setOn] = useState("d-info");
    let title = data.title;
    let placeId = data.contentsid;
    let intro = data.introduction;
    let newTag = data.tag.split(",");
    let hashTag = newTag.map(tag => "#" + tag.trim() + " ");;
    let address = data.address;
    let roadaddress = data.roadaddress;
    let phone = data.phoneno;
    let position = [{title: data.title, lat: data.latitude, lng: data.longitude}];
    let center = {lat: data.latitude, lng: data.longitude};
    let level = 3;

    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <input type="radio" name="nav" id="d-info" onClick={() => setOn("d-info")} defaultChecked/>
                    <label for="d-info">관광정보</label>
                </li>
                <li className="nav-item">
                    <input type="radio" name="nav" id="d-contact" onClick={() => setOn("d-contact")}/>
                    <label for="d-contact">주소/연락처</label>
                </li>
                <li className="nav-item">
                    <input type="radio" name="nav" id="d-map" onClick={() => setOn("d-map")}/>
                    <label for="d-map">위치/교통</label>
                </li>
                <li className="nav-item">
                    <input type="radio" name="nav" id="d-review" onClick={() => setOn("d-review")}/>
                    <label for="d-review">평점/후기</label>
                </li>
            </ul>

            <div style={{"padding":"20px 0"}}>
                {on == "d-info" && <Info intro={intro} hashTag={hashTag}/>}
                {on == "d-contact" && <Contact address={address} roadaddress={roadaddress} phone={phone}/>}
                {on == "d-map" && <Map positions={position} center={center} level={level}/>}
                {on == "d-review" && <Review placeId={placeId} comment={comment} avgStar={avgStar} sum={sum}/>}
            </div>
        </>
    )
}