"use client"

import { getData } from "../../util";
import { useState } from "react";
import Card from "../card";
import Link from "next/link";
import Spinner from "@/app/spinner";



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

    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&`

    const handleChange = (e) => {
        const place = e.target.value;
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

    return (
        <div id="search">
            <input type="text" onChange={handleChange} placeholder="관광지 검색"/>
            <hr />
            <Result isLoaded={isLoaded} error={error} places={places}/>
            
        </div>
    )

}

