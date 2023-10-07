"use client"
import { getData } from "../util";
import Header from './header';
import Link from "next/link";
import Card from './card';
import { useEffect, useState } from "react";

let page = 1;
const api = process.env.NEXT_PUBLIC_API_KEY
const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&page=${page}`
const location = "home"

export default function Index(props) {
    const [data, setData] = useState([]);
    const [skip, setSkip] = useState(20);
    let cnt = 20;
    let limit = 20;


    useEffect(() => {
        getData(url)
        .then(data => {
            let newData = data.items;
            setData(newData)
        })
        .catch(error => console.log(error))
    }, [skip])
    let items = data.slice((skip === 20 ? 0 : skip - 20), skip);

    const pageRight = () => {
        if(skip === 100) {
            setSkip(20)
            cnt = 20;
            page++;
        } else {
            cnt += limit
            setSkip(cnt);
        }
        
        console.log(skip)
    }

    const pageLeft = () => {
        if(skip === 0 && page != 1) {
            setSkip(100);
            cnt = 100;
            page--;
        } else {
            cnt -= limit;
            setSkip(cnt);
        }
    }

    return(
        <>
            <Header location={location}/>
            <div id="banner">
                <img id="banner" src="/banner.jpg"/>
            </div>

            <ul id="quick" className="nav">
                <li>
                    <div className="qmenu"></div> <p>공지사항</p>
                </li>
                <li>
                    <div className="qmenu"></div> <p>커뮤니티</p>
                </li>
                <li>
                    <div class="qmenu"></div> <p>고객센터</p>
                </li>
                <li>
                    <div class="qmenu"></div> <p>나의여행</p>
                </li>
                <li>
                    <div class="qmenu"></div> <p>공지사항</p>
                </li>
            </ul>

            <hr/>

            
            <div id="cardContainer">
                {items.map(item => (
                    <div key={item.contentsid}>
                        <Link href={`/place/${item.contentsid}`}>
                        <Card 
                            id={item.contentsid}
                            title={item.title}
                            photo={item.repPhoto.photoid.imgpath}
                            thumb={item.repPhoto.photoid.thumbnailpath}
                            tag={item.tag}
                            script={item.introduction}
                        />
                        </Link>
                    </div>
                ))}
                <button onClick={pageLeft}>left</button>
                <button onClick={pageRight}>right</button>
            </div>
        </>
    )

}