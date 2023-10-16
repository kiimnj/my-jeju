import Star from './star';
import ImgCards from './imgcards';
import ReviewHeader from './reviewheader'
import ReviewFooter from './reviewfooter'

export default function ReviewContainer() {
    return (
        <div class="">
            <div id='reviewContainer'>
            <Star id="star" />
            <ReviewHeader />

            <div className='reviewText'>리뷰 내용입니다.</div>

            <ImgCards />
            <ReviewFooter />

            </div>
        </div>
    )
}