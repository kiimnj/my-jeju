"use client"
import { getData } from "../util";
import Header from './header';
import Link from "next/link";
import Card from './card';
import { useEffect, useState } from "react";


export default function Index(props) {
    const [data, setData] = useState([]);
    let [skip, setSkip] = useState(26);
    let[isLoaded, setIsLoaded] = useState()
    let limit = 26;

    let addData = [];
    
    
    /** 비짓제주 api 전체 페이지 가져오기 */
    const api = process.env.NEXT_PUBLIC_API_KEY
    const location = "home"
    
    useEffect(() => {

        for (let i = 1; i < 53; i++) {
            // let i = 1
            const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&page=${i}`
            getData(url)
            .then((resp) => {
                let items = resp.items
                let newData = items.filter(item => item.alltag != null); // data에서 유효한 데이터만 필터링
                return newData;
            })
            .then(newData => {
                addData.push(...newData)
                
            })            
            .finally(() => setData(addData))   
        }
    }, [])
    

    console.log("data:", data.length)
    console.log(skip)
    // console.log(skip)

    // 페이지 분할
    let list;
    if(skip === limit) {                // 첫페이지일 경우
        list = data.slice(0, skip);
    } else if(skip > data.length) {     // 마지막 페이지일 경우
        list = data.slice(skip - limit)
    } else {                            // 첫페이지도, 마지막 페이지도아닐 경우
        list = data.slice(skip - limit, skip);
    }

    let pageRight = () => {
        if(skip< data.length) {
            setSkip(skip += limit)
        }
    }

    const pageLeft = () => {
        if(skip != limit) {
            setSkip(skip -= limit)
        } else {
            setSkip(limit)
        }
    }


    return(
        <>
            <Header location={location}/>
            <div id="banner">
                <img id="banner" src="/banner.jpg"/>
            </div>

            <ul id="quick" className="nav">
                <li><div className="qmenu"></div> <p>공지사항</p></li>
                <li><div className="qmenu"></div> <p>커뮤니티</p></li>
                <li><div className="qmenu"></div> <p>나의지도</p></li>
                <li><div className="qmenu"></div> <p>고객센터</p></li>
                <li><div className="qmenu"></div> <p>공지사항</p></li>
            </ul>

            <hr/>

            
            <div id="cardContainer">
                {list.map(item => (
                    <div key={item.contentsid}>
                        <Link href={`/place/${item.contentsid}`}>
                        <Card 
                            id={item.contentsid}
                            title={item.title}
                            photo={item.repPhoto === null ? null : item.repPhoto.photoid.imgpath}
                            thumb={item.repPhoto === null ? null : item.repPhoto.photoid.thumbnailpath}
                            tag={item.tag}
                            script={item.introduction}
                        />
                        </Link>
                    </div>
                ))}
                {(list.length % 2 == 1 && skip >= data.length) &&
                    <div className="emptyCard"></div>
                }
                <div>
                    <button onClick={pageLeft} className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>    
                    </button>
                    <button onClick={pageRight} className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>
                    </button>
                </div>
            </div>
        </>
    )

}