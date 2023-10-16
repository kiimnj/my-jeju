"use client"

import { getData } from "../../util";
import { useState, useRef, useEffect } from "react";
import Card from "../card";
import Link from "next/link";
import Spinner from "@/app/spinner";
import Header from "../header";
import SideMenu from "../sideMenu";
import { useSearchParams } from "next/navigation";


function Result({isLoaded, error, places}){

    if(error) {
        return <p>{error.message}</p>
    }

    if(!isLoaded) {
        return <p><Spinner /></p>
    }

    return (
        places.map(item => (
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
        )))
}


export default function Search() {
    const [places, setPlaces] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    const params = useSearchParams();
    const inputEL = useRef();

    useEffect(() => {
        if(params) {
            let place = params.get("title")
            inputEL.current.value = place;

            setError(null);
            setIsLoaded(false);
            
            getData(`${url}&title=${place}`)
            .then(data => {
                let items = data.items
                let newData = items.filter(item => item.alltag != null); // data에서 유효한 데이터만 필터링
                console.log(newData)
                setPlaces(newData)
            })
            .catch(error => setError(error))
            .finally(() => setIsLoaded(true))
        }
    },[])

    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&`

    const handleChange = (e) => {
        let place = e.target.value;
        console.log(`${url}title=${place}`)
    
        if (!place) {
            return setPlaces([]);
        }

        setError(null);
        setIsLoaded(false);
        
        getData(`${url}&title=${place}`)
        .then(data => {
            let items = data.items
            let newData = items.filter(item => item.alltag != null); // data에서 유효한 데이터만 필터링
            console.log(newData)
            setPlaces(newData)
        })
        .catch(error => setError(error))
        .finally(() => setIsLoaded(true))
    }

    const inputStyle = {
        'font-size': '15px',
        'width': '268px',
        'height': '40px',
        'border-radius': '20px',
        'border': '1px solid #d9d9d9',
        'padding' : '15px',
        'marginRight' : '10px'
    }

    return (
        <>
            <div id="search">
                <div id="search-header">
                    <input id="searchBar" ref={inputEL} type="text" style={inputStyle} onChange={handleChange} placeholder="장소명을 검색하세요."/>
                    <i id="magnifierIcon" class="fa-solid fa-magnifying-glass"></i>
                </div>
                <hr />
                <div id="cardContainer">
                    <Result isLoaded={isLoaded} error={error} places={places}/>
                </div>
            </div>
        </>
    )

}

