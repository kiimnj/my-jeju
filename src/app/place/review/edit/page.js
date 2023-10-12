"use client"
import { getData } from '../../../util'
import Header from '../../header';
import ReviewForm from './reviewform'
import StarRating from './starrating'
import SelectPlace from './selectplace'

export default function page() {
  return (
    <div>
        <Header />
        <SelectPlace />
        <StarRating />
        <ReviewForm />
    </div>
  )
}
