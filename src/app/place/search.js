"use client"

import { getData } from "../util";
import Spinner from "../spinner";

export default function Search() {
    const [places, setPlaces] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);

    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&`

    function handleChange(e) {
        const place = e.target.value;
    
        if (!place) {
            return setPlaces([]);
        }

        setError(null);
        setIsLoaded(false);
        
        getData(`${url}?title=${place}`)
        .then(data => setPlaces(data))
        .catch(error => setError(error))
        .finally(isLoaded => setIsLoaded)
    }

    return (
        <div id="search">
            <input type="text" onChange={handleChange} placeholder="관광지 검색"/>

            
            <hr />
            {error && <div className="error"><p>{error.message}</p> </div>}
            {isLoaded && <div className="spinner"><p><Spinner /></p> </div>}
           
            {places.map(item => (
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
                </div>))
            }     
        </div>
    )

}

