"use client"
import { useEffect, useState } from 'react'
import Header from '../../header';
import PlaceTab from './placetab';
import ReviewContainer from './reviewcontainer'
import CommentsList from './commentslist';
import AddComment from './addcomment'
import '../place.css';
import './review.css';


export default function Review(props) {
  const id = props.params.id;
  return (
      <div id="reviewContainer">
        <Header />
        <PlaceTab />
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