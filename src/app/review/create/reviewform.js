import { useState } from 'react'
import ReviewText from './reviewtext'
import AddImg from './addimg'
import StarRating from './starrating'
import SelectPlace from './selectplace'
import { addReview } from '@/app/util'
import { useRouter } from 'next/navigation'

export default function ReviewForm() {
  const [seletedPlaceId, setSeletedPlaceId] = useState('');
  const [star, setStar] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const reviewUrl = "http://localhost:3001/review"
  let router = useRouter();

  const handleCreate = async (evt) => {
    evt.preventDefault();

    addReview(reviewUrl, seletedPlaceId, "userId2", star, reviewText)
    .then((data) => console.log(data));

    router.replace(`/place/${seletedPlaceId}`)
  };

  return (
    <div id="handleCreate">
        <form onSubmit={handleCreate} >
          <div className="wrap">
            <SelectPlace value={seletedPlaceId} onChange={setSeletedPlaceId} />
            <StarRating value={star} onChange={setStar} />
            <ReviewText value={reviewText} onChange={setReviewText} />
            <AddImg />
            <div id="reviewButtonBox">
              <button id="reviewButton">리뷰 등록하기</button>
            </div>
          </div>
        </form>
    </div>
  )
}