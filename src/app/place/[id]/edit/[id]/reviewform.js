import { useState } from 'react'
import ReviewText from './reviewtext'
import AddImg from './addimg'
import StarRating from './starrating'
import SelectPlace from './selectplace'

export default function ReviewForm({props}) {
  const [seletedPlaceId, setSeletedPlaceId] = useState('');
  const [star, setStar] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const id = props.params.id;

  const handleCreate = async (evt) => {
    evt.preventDefault();
    const resp = await fetch(`http://localhost:3001/post/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seletedPlaceId, star, reviewText }),
    });
    const items = await resp.json();
    // console.log('Created items:', items);
    // router.push(`/read/${topic.id}`);
    // router.refresh();
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