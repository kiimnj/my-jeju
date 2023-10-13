"use client"
import { useState } from "react"
import Review from "./review"
import Info from "./info";
import Map from "./map";
import Contact from "./contact";

export default function DetailNav ({data, comment, avgStar, sum}) {
    let [on, setOn] = useState("d-explain");
    let placeId = data.contentsid


    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <input type="radio" name="nav" id="d-explain" onClick={() => setOn("d-explain")} defaultChecked/>
                    <label for="d-explain">관광정보</label>
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
                {on == "d-explain" && <Info />}
                {on == "d-contact" && <Contact/>}
                {on == "d-map" && <Map/>}
                {on == "d-review" && <Review placeId={placeId} comment={comment} avgStar={avgStar} sum={sum}/>}
            </div>
        </>
    )
}