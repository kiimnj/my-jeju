"use client"
import { getData } from '../../../util'
import Header from '../../header';
import ReviewForm from './reviewform'
import InputScore from './inputscore'
import SelectPlace from './selectplace'
import ModalTest from './modaltest'


export default function page() {
  return (
    <div>
        <Header />
        <ModalTest />
        <SelectPlace />
        <InputScore />
        <ReviewForm />
    </div>
  )
}
