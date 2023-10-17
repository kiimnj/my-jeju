import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getData } from '../util';
import logo from '/public/logo.png';
import Search from './search/page';
export default function SideMenu ({on, setOn}) {

    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState();
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);

    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&`

    const handleChange = (e) => {
        const place = e.target.value;
        setPlace(place);
        console.log(`${url}title=${place}`)
    
        if (!place) {
            return setPlaces([]);
        }

        setError(null);
        setIsLoaded(false);
        
        getData(`${url}&title=${place}`)
        .then(data => {
            let items = data.items
            let newData = items.filter(item => item.alltag != null).slice(0,5); // data에서 유효한 데이터만 필터링
            console.log(newData)
            setPlaces(newData)
        })
        .catch(error => setError(error))
        .finally(() => setIsLoaded(true))
    }

    // 메뉴 나올 때 부드러운 효과
    const onMenu = {
        'display' : on  && 'block',
        'transform': on && 'translateX(-393px)',
    }

    return (
        <div className='back' style={onMenu}>
            <div id="sideMenu">
                <div>
                    <i  onClick={() => setOn(!on)} className="fa-solid fa-xmark"></i>
                    <Image src={logo} width={40} height={40} alt='logo' id='logo'/>
                </div>
                
                <div id="search-header">
                    <input id="searchBar" type="text" onChange={handleChange} placeholder="장소명을 검색하세요." autoComplete='false'/>
                    <i id="magnifierIcon" className="fa-solid fa-magnifying-glass"></i>

                    {places.length > 0 && 
                        <div id="datas">
                            {places.map(item => (
                                <Link href={`/place/${item.contentsid}`}>
                                    <div style={{'color':'black'}} className="data">{item.title}</div>
                                </Link>
                            ))}
                            <Link href={`/place/search?title=${place}`}><div className="data">...더보기</div></Link>
                        </div>
                    }
                </div>

                <ul>
                    <li>공지사항</li>
                    <li>예약내역</li>
                    <li>고객센터</li>
                    <li>커뮤니티</li>
                </ul>

                <p className="">마이페이지</p>
                <ul>
                    <li>나의 리뷰</li>
                    <li>관심 지역</li>
                    <li>방문 지역</li>
                    <li>여행 계획</li>
                    <li>나의 지도</li>
                </ul>

                <p className="">로그아웃</p>

                <div id="set">
                    <dl>
                        <dt>테마</dt>
                        <dd>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                라이트모드
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">라이트모드</a></li>
                                    <li><a className="dropdown-item" href="#">다크모드</a></li>
                                </ul>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt>언어</dt>
                        <dd>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                한국어
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">한국어</a></li>
                                    <li><a className="dropdown-item" href="#">영어</a></li>
                                </ul>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}