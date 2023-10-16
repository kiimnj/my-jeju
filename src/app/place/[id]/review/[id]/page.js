"use client"
import { useEffect, useState } from 'react'
import Header from '../../header';
import PlaceTab from './placetab';
import ReviewContainer from './reviewcontainer'
import CommentsList from './commentslist';
import AddComment from './addcomment'


export default function Review() {
    return (
      <div>
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