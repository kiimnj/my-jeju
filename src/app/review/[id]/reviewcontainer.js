import Star from './star';
import ImgCards from './imgcards';
import ReviewHeader from './reviewheader'
import ReviewFooter from './reviewfooter'

export default function ReviewContainer({review, cntComment, cntLike}) {
    return (
        <div class="">
            <div id='reviewContainer'>
            <Star id="star" />
            <ReviewHeader name={review.userid} dateTime={review.dateTime}/>

            <div className='reviewText'>{review.comment}</div>

            {/* <ImgCards /> */}
            <ReviewFooter cntComment={cntComment} cntLike={cntLike}/>

            </div>
        </div>
    )
}