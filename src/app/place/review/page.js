"use client"
import { getData } from '../../util'
import { useEffect, useState } from 'react'
import Link from "next/link";
import Header from '../header';
import PlaceTab from './placetab';
import Review from './review'
import CommentsList from './commentslist';
import AddComment from './addcomment'

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
        <Review />
        <CommentsList />
        <AddComment />
      </div>
    )
  }