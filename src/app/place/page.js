import { getData } from "../util";
import Header from './header';
import Link from "next/link";
import Card from './card';

const api = process.env.NEXT_PUBLIC_API_KEY
const page = 1;
const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&page=${page}`
const location = "home"

export default async function Index(props) {
    const data = await getData(url)
    const items = data.items.slice(0, 4);
    // console.log(items);

    return(
        <>
            <Header location={location}/>
            <div id="banner">
                <img id="banner" src="/banner.jpg"/>
            </div>

            <ul id="quick" class="nav">
                <li>
                    <div class="qmenu"></div> <p>공지사항</p>
                </li>
                <li>
                    <div class="qmenu"></div> <p>공지사항</p>
                </li>
                <li>
                    <div class="qmenu"></div> <p>공지사항</p>
                </li>
                <li>
                    <div class="qmenu"></div> <p>공지사항</p>
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
            </div>
        </>
    )

}