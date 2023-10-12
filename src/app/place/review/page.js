"use client"
import { getData } from '../../util'
import { useEffect, useState } from 'react'
import Link from "next/link";
import Header from '../header';
import PlaceTab from './placetab';
import ImgCards from './imgcards';
import CommentsList from './commentslist';
import CommentForm from './commentform'

let page = 1;
const api = process.env.NEXT_PUBLIC_API_KEY
const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&page=${page}`
const location = "home"

export default function review() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(url)
        .then(data => {
            let newData = data.items;
            setData(newData)
        }).catch(error => console.log(error))
    }, [])
    let items = data;
    

    return (
      <div>
        <Header location={location}/>
        <div className='placeInfo'>
            {/* {items.map(item => (
                <div key={item.contentsid}>
                    <Link href={`/place/${item.contentsid}`}>
                    <PlaceTab 
                        id={item.contentsid}
                        title={item.title}
                        photo={item.repPhoto.photoid.imgpath}
                    />
                    </Link>
                </div>
            ))} */}
            <div>
                {/* <Link href=''> */}
                <PlaceTab />
                {/* </Link> */}
            </div>
        </div>
        <div id='reviewConatainer'>
            <h2 class="score">★★★☆☆ 3.5</h2>
            <p class="recommendIcon"></p>
            <p class="recommendCnts"></p>
            <div>
                <span class='nickname'>닉네임</span>
                <span>&ensp;|&ensp;</span>
                <span class='reviewDate'>2023.03.03</span>
            </div>
            <p>
            {/* {items.map(item => (
                <Link href={`/place/${item.contentsid}/review/${review.reviewid}/edit`}>수정</Link>
            ))} */}
            <div>리뷰 내용입니다.</div>
                <p>수정  |  삭제</p>
    
            {/* <p>&ensp;|&ensp;</p>
                <p>삭제</p> */}
            </p>
            <p class="commentIcon"></p>
            <p class="commentCnts"></p>
            <p class=''></p>
        </div>
        <ImgCards />
        <CommentsList />
        <CommentForm />
      </div>
    )
  }