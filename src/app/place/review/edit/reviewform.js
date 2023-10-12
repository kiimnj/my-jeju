import ReveiwButton from './reveiwbutton'
import ReviewText from './reviewtext'
import AddImg from './addimg'

export default function ReviewForm() {
  return (
    <div id="reviewForm">
        <form >
          <div className="wrap">
            <ReviewText />
            <AddImg />
            <ReveiwButton />
          </div>
        </form>
    </div>
  )
}