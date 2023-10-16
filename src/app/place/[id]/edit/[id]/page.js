"use client"
// import SelectPlace from './selectplace'
// import StarRating from './starrating'
import ReviewForm from './reviewform'
import Header from '../../header';
import '../../place.css';
import './edit.css'

export default function page(props) {
  return (
    <div>
        <Header />
        <ReviewForm props={props} />
    </div>
  )
}
