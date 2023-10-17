"use client"
import Star from './star';
import ImgCards from './imgcards';
import ReviewHeader from './reviewheader'
import ReviewFooter from './reviewfooter'
import { getData, like, unLike } from '@/app/util';
import { useState, useEffect } from 'react';

export default function ReviewContainer({review, cntComment}) {
    //리뷰 좋아요 불러오기
    const likeUrl = "http://localhost:3001/reviewlike"
    let [allLike, setAllLike] = useState([]);
    let [likeId, setLikeId] = useState(null)

    useEffect(() => {
        Promise.all ([
            getData(`${likeUrl}?reviewid=${review.id}`),
            getData(`${likeUrl}?userid=user01&reviewid=${review.id}`)
        ])
        .then(([alldata, mydata]) => {
            setAllLike(alldata)
            if(mydata.length > 0) {
                setLikeId(mydata[0].id)
            }
        })
    }, [likeId])

    const handleLike = () => {
        if (likeId) { // 채워진 아이콘 상태에서 누른 경우

            unLike(`${likeUrl}/${likeId}`)
            .then(() => setLikeId(null))

        } else {  // 빈 아이콘 상태에서 누른 경우

            like(likeUrl, "user01", review.id)
            .then((data) => (setLikeId("success")))
        }
    }


    return (
        <div class="">
            <div id='reviewContainer'>
            <div style={{textAlign: "center"}}><Star id="star" star={review.star} size="27"/></div>
            <ReviewHeader name={review.userid} dateTime={review.dateTime}/>

            <div className='reviewText'>{review.reviewText}</div>

            {/* <ImgCards /> */}
            <ReviewFooter cntComment={cntComment} allLike={allLike} likeId={likeId} handleLike={handleLike}/>

            </div>
        </div>
    )
}