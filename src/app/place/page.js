"use client"
import { getData } from "../util";
import Link from "next/link";
import Card from './card';
import { useEffect, useState } from "react";
import Header from './header';



let page = 1;
export default function Index() {
    const [data, setData] = useState([]);
    let [skip, setSkip] = useState(20);
    // let[isLoaded, setIsLoaded] = useState()
    const limit = 20;   // 고정단위
  const location = "home"
    
    
    /** 비짓제주 api 전체 페이지 가져오기 */
    let addData = [];   // 여기에 비동기로 데이터 축적
    
    useEffect(() => {
        const api = process.env.NEXT_PUBLIC_API_KEY
        
    
        for (let i = 1; i < 3; i++) {
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
                setData(addData);
            })        
        }

    }, [])
    
    // console.log(data.length)
    console.log(skip, page)
    

    // 페이지 분할
    let list;
    if(skip === limit) {                // 첫페이지일 경우
        list = data.slice(0, skip);
    } else if(skip > data.length) {     // 마지막 페이지일 경우
        list = data.slice(skip - limit)
    } else {                            // 첫페이지도, 마지막 페이지도아닐 경우
        list = data.slice(skip - limit, skip);
    }


    // 페이지 번호
    let pageCnt = 10;   // 구간별 페이지 갯수
    let pages = [];     // 구간별 페이지 번호
    let n = (data.length / limit) < 10 ? 10 : Math.ceil(data.length / limit);
    for(let i = 1; i < n + 1; i++) {
        pages.push(i)
    }

    let pageRight = () => {
        if(limit * page < data.length) {
            page++;
            setSkip(limit * page)
        }
    }

    const pageLeft = () => {
        if(skip != limit) {
            setSkip(skip -= limit)
        } else {
            setSkip(limit)
        }
    }

    const changePage = (e) => {
        let num = e.target.value
        page = num;
        setSkip(limit * page)
        console.log(num)
    }

    return(
        <>
            <Header location={location}/>  

            <div>
                <img id="banner" src="/banner.jpg"/>
            </div>

            <ul id="quick" className="nav">
                <li><div className="qmenu" ></div> <p className="small-font">공지사항</p></li>
                <li><div className="qmenu"></div> <p className="small-font">커뮤니티</p></li>
                <li><div className="qmenu"></div> <p className="small-font">나의지도</p></li>
                <li><div className="qmenu"></div> <p className="small-font">고객센터</p></li>
                <li><div className="qmenu"></div> <p className="small-font">공지사항</p></li>
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
                
            </div>

            <div className="btnContainer">
                    <button onClick={pageLeft} className="btn  btn-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>    
                    </button>
                <div class="btn-group me-2" role="group" aria-label="First group">
                    {pages.map((num) => (
                        <button key={num} value={num} onClick={(e) => changePage(e)} type="button" className="btn light">{num}</button>
                        ))}
                </div>
                <button onClick={pageRight} className="btn  btn-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>
                </button>
            </div>
        </>
    )

}