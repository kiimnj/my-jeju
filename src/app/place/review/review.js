import Star from './star';
import ImgCards from './imgcards';
import ReviewHeader from './reviewheader'
import ReviewFooter from './reviewfooter'

export default function Review() {
    return (
        <div class="">
            <div id='reviewConatainer'>
            <Star id="star" />
            <ReviewHeader />

            <p>
            {/* {items.map(item => (
                <Link href={`/place/${item.contentsid}/review/${review.reviewid}/edit`}>수정</Link>
            ))} */}
            <div>리뷰 내용입니다.</div>

            {/* <p>&ensp;|&ensp;</p>
                <p>삭제</p> */}
            </p>

            <ImgCards />
            <ReviewFooter />

            </div>
        </div>
    )
}