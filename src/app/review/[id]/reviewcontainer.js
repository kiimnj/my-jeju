"use client"
import Star from './star';
import ImgCards from './imgcards';
import ReviewHeader from './reviewheader'
import ReviewFooter from './reviewfooter'
import { getData, like } from '@/app/util';
import { useState, useEffect } from 'react';

export default function ReviewContainer({review, cntComment}) {
    //리뷰 좋아요 불러오기
    const likeUrl = "http://localhost:3001/reviewlike"
    let [cntLike, setCntLike] = useState();

    useEffect(() => {
        getData(`${likeUrl}?reviewid=${review.id}`)
        .then(data => setCntLike(data.length))
    }, [])

    const handleLike = () => {
        let plus = cntLike + 1;

        setCntLike(plus)
        like(likeUrl, "user01", review.id)
    }


    return (
        <div class="">
            <div id='reviewContainer'>
            <Star id="star" />
            <ReviewHeader name={review.userid} dateTime={review.dateTime}/>

            <div className='reviewText'>{review.comment}</div>

            {/* <ImgCards /> */}
            <ReviewFooter cntComment={cntComment} cntLike={cntLike} handleLike={handleLike}/>

            </div>
        </div>
    )
}