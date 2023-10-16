// "use client"
// import { useEffect, useState } from 'react'
// import Header from '@/app/place/header';
// import PlaceTab from './placetab';
// import ReviewContainer from './reviewcontainer'
// import CommentsList from './commentslist';
// import AddComment from './addcomment';
// import { getData } from "@/app/util";
// import Spinner from '@/app/spinner';

// export default function Review(props) {
//   const [review, setReview] = useState();
//   const [comments, setComments] = useState([])
//   const [like, setLike] = useState([])
//   const [isLoaded, setIsLoaded] = useState(true);


//   const api = process.env.NEXT_PUBLIC_API_KEY

//   // 리뷰 불러오기
//   const param = props.params.id
//   const reviewUrl = `http://localhost:3001/review/${param}`

//   // 리뷰 댓글 불러오기
//   const commentUrl = `http://localhost:3001/comment?reviewid=${param}`

//   //리뷰 좋아요 불러오기
//   const reviewlike = `http://localhost:3001/reviewlike?reviewid=${param}`

//   useEffect(() => {

//     getData(reviewUrl)
//     .then(data => {
//       setReview(data)
//     })
//     getData(reviewlike)
//     .then(data => setLike(data.length))

//     getData(commentUrl)
//     .then(data => setComments(data))

//   },[])

//   // if(!isLoaded) {
//   //   return <Spinner/>
//   // }
 
//   console.log(review)
//   return (
//     <div>
//       <Header />
//       <PlaceTab />
//       <ReviewContainer />

//       <div className='hr'>
//         <div>
//           <hr className='hr' />
//         </div>
//       </div>
      
//       <AddComment />
//       <CommentsList />
//     </div>
//   )
// }


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

  // 리뷰 댓글 불러오기
  const commentUrl = `http://localhost:3001/comment?reviewid=${param}`
  const comment = await getData(commentUrl);
  const cntComment = comment.length;

  return (
    <div>
      <Header />
      <PlaceTab id={review.contentsid} />
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