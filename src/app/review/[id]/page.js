"use client"
import { useEffect, useState } from 'react'
import Header from '@/app/place/header';
import PlaceTab from './placetab';
import ReviewContainer from './reviewcontainer'
import CommentsList from './commentslist';
import AddComment from './addcomment';
import { getData } from "@/app/util";
import Spinner from '@/app/spinner';

export default function Review(props) {
  const api = process.env.NEXT_PUBLIC_API_KEY
  const [place, setPlace] = useState();
  const [review, setReview] = useState();
  const [comments, setComments] = useState([])
  const [like, setLike] = useState([])
  const [isLoaded, setIsLoaded] = useState(true);


  // 리뷰 불러오기
  const param = props.params.id
  const reviewUrl = `http://localhost:3001/review/${param}`

  // 리뷰 댓글 불러오기
  const commentUrl = `http://localhost:3001/comment?reviewid=${param}`

  //리뷰 좋아요 불러오기
  const reviewlike = `http://localhost:3001/reviewlike?reviewid=${param}`

  useEffect(() => {

    setIsLoaded(false);

    getData(reviewUrl)
    .then(data => {
      setReview(data)

      // 리뷰를 쓴 관광지 ID
      return data.contentsid;
    })
    .then((id) => {
      let placeUrl = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&cid=${id}`
      getData(placeUrl)
      .then(data => {
        setPlace(data.items[0])
      })
    })

    getData(commentUrl)
    .then(data => setComments(data))

    getData(reviewlike)
    .then(data => setLike(data.length))

    setIsLoaded(true)
  },[])

  // if(!isLoaded) {
  //   return <Spinner/>
  // }
  console.log(place)

  return (
    <div>
      <Header />
      <PlaceTab place={place}/>
      <ReviewContainer />

      <div className='hr'>
        <div>
          <hr className='hr' />
        </div>
      </div>
      
      <AddComment />
      <CommentsList />
    </div>
  )
}