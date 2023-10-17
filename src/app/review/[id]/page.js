import Header from '@/app/place/header';
import PlaceTab from './placetab';
import ReviewContainer from './reviewcontainer'
import CommentsList from './commentslist';
import AddComment from './addcomment';
import { getData } from "@/app/util";
import Comment from './comment';
import Spinner from '@/app/spinner';

export default async function Review(props) {
  const api = process.env.NEXT_PUBLIC_API_KEY

  // 리뷰 불러오기
  const param = props.params.id
  const reviewUrl = `http://localhost:3001/review/${param}`
  const review = await getData(reviewUrl);

  
  // 평균 별점 구하기
  const placeAllReview = `http://localhost:3001/review?contentsid=${review.contentsid}`
  const allReviews = await getData(placeAllReview);
  let starSum = 0;
  for(let r of allReviews) {
    starSum += Number(r.star)
  }
  let avg = Math.round(starSum/allReviews.length)

console.log(avg)
  // 리뷰 댓글 불러오기
  const commentUrl = `http://localhost:3001/comment?reviewid=${param}`
  const comment = await getData(commentUrl);
  const cntComment = comment.length;

  return (
    <div>
      <Header />
      <PlaceTab id={review.contentsid} avg={avg}/>
      <ReviewContainer review={review} cntComment={cntComment}/>

      <div className='hr'>
        <div>
          <hr className='hr' />
        </div>
      </div>
      
      <Comment comment={comment} param={param}/>
    </div>
  )
}