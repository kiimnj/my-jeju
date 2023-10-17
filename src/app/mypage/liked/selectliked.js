"use client"
import { getData } from "@/app/util";
import { useState, useEffect } from "react";

export default function SelectLiked() {
// const places = [
//     {
//         "alltag": "커피,차,생과일에이드,현금결제,카드결제,화장실,무료 WIFI,편의점,음료대,유도 및 안내시설,경보 및 피난시설",
//         "contentsid": "CNTS_000000000020353",
//         "contentscd": {
//             "value": "c4",
//             "label": "음식점",
//             "refId": "contentscd>c4"
//         },
//         "title": "이성필 커피볶는집",
//         "region1cd": {
//             "value": "region1",
//             "label": "제주시",
//             "refId": "region>region1"
//         },
//         "region2cd": {
//             "value": "11",
//             "label": "제주시내",
//             "refId": "region1>11"
//         },
//         "address": "제주특별자치도 제주시 이도2동 광양8길 1",
//         "roadaddress": "제주특별자치도 제주시 이도2동 광양8길 1",
//         "tag": "커피,차,생과일에이드,음식,핸드드립커피,아메리카노,카페라떼,바닐라라떼,카푸치노,에스프레소,카페모카,카라멜마끼아또,아포가토,녹차라떼,초코라떼,홍차라떼,고구마라떼,라떼,에이드,레몬에이드,자몽에이드,청포도에이드,주스,망고주스,딸기주스,블루베리주스,파인애플주스,스무디,딸기스무디,망고스무디,블루베리스무디,다즐링,얼그레이,카모마일,페퍼민트,루이보스,더치커피,베이커리,빵,티라미수,케이크,치즈케이크,머핀",
//         "introduction": "정성스러운 커피 한 잔",
//         "latitude": 33.499733,
//         "longitude": 126.52797,
//         "postcode": null,
//         "phoneno": "064-757-4815",
//         "repPhoto": {
//             "descseo": "이성필 커피볶는집",
//             "photoid": {
//                 "photoid": 8432,
//                 "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/7b45ef71-d620-4a80-99b9-66d951ba66e7.jpg",
//                 "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/201804/30/788f10f8-e24f-42ff-ac15-f77d5c583e13.jpg"
//             }
//         }
//     },
//     {
//         "alltag": "제주시청,크림브륄레,카페,음식,식당,화장실,무료 WIFI,넛츠끄레마, 크림브륄레,어린이 출입가능,불가능",
//         "contentsid": "CNTS_200000000012985",
//         "contentscd": {
//             "value": "c4",
//             "label": "음식점",
//             "refId": "contentscd>c4"
//         },
//         "title": "라토커피",
//         "region1cd": {
//             "value": "region1",
//             "label": "제주시",
//             "refId": "region>region1"
//         },
//         "region2cd": {
//             "value": "11",
//             "label": "제주시내",
//             "refId": "region1>11"
//         },
//         "address": "제주특별자치도 제주시 이도이동 1769-15",
//         "roadaddress": "제주특별자치도 제주시 광양10길 20",
//         "tag": "제주시청,크림브륄레,카페,음식,식당,에스프레소,아메리카노,플랫화이트,카페라떼,바닐라라떼,카푸치노,더치아메리카노,에이드,자몽에이드,오미자에이드,마들렌,쿠키,케이크,치즈케이크,브라우니,블루베리라떼,말차라떼,아포가토,밀크티라떼,라떼,커피,차,유자차,국화차,얼그레이,자몽차,오미자차,홍삼차",
//         "introduction": "제주시청 인근에 위치한 라토커피는 주택을 개조하여 만든 카페이며 곳곳에 아기자기하고 옛스러운 소품들이 전시되어 있어 여유롭게 커피와 디저트를 즐길 수 있다.",
//         "latitude": 33.4987017,
//         "longitude": 126.5282091,
//         "postcode": null,
//         "phoneno": null,
//         "repPhoto": {
//             "descseo": "라토커피",
//             "photoid": {
//                 "photoid": 2019022598501,
//                 "imgpath": "https://api.cdn.visitjeju.net/photomng/imgpath/202203/04/0c604cb1-a03c-4de5-b9fe-809b7d287159.jpg",
//                 "thumbnailpath": "https://api.cdn.visitjeju.net/photomng/thumbnailpath/202203/04/f7f5ff38-cefb-4149-9db2-c6ecb3049c83.jpg"
//             }
//         }
//     }
// ]
    /** 비짓제주 api 전체 페이지 가져오기 */
    const [data, setData] = useState([]);
    let addData = [];   // 여기에 비동기로 데이터 축적

    const [likedPlaces, setLikedPlaces] = useState([]);
    let addLikedPlaces = [];
    
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

        // getData("http://localhost:3001/likevisit").then((likevisit) => {
        //     const likedPlaces = data.filter((dataItem) => {
        //         const likeItem = likevisit.find((likeItem) => likeItem.placeId === dataItem.contentsid);
        //         return likeItem && likeItem.visited;
        //     });

        //     console.log('likedPlaces', likedPlaces);
        // });


        getData("http://localhost:3001/likevisit").then((likevisit) => {
            let likevisits = likevisit.likevisits
            let newLikedPlaces = likevisits.filter(
                (dataItem) => {
                            const likeItem = likevisit.find((likeItem) => likeItem.placeId === dataItem.contentsid);
                            return likeItem && likeItem.visited;
                        }
            );
            return newLikedPlaces;
        })
        .then(newLikedPlaces => {
            addLikedPlaces.push(...newLikedPlaces)
            setLikedPlaces(addLikedPlaces);
        })

        
        console.log('likedPlaces', likedPlaces);
    }, []);

    return (
      <div id="selectLikedContainer">
        <div>
            <div class="dropdown selectLeft">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="selectedTitle">관심 지역</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">방문 지역</a></li>
                </ul>
            </div>

            <div>
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="selectedTitle">관심 지역</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">방문 지역</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }