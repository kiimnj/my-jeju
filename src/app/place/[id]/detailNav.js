// "use client"
// import { useState } from "react"
import Review from "./review"

export default function DetailNav ({data, comment, avgStar, sum}) {

    let placeId = data.contentsid

    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <input type="radio" name="nav" id="d-explain" defaultChecked/>
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

            
            <Review placeId={placeId} comment={comment} avgStar={avgStar} sum={sum}/>
        </>
    )
}