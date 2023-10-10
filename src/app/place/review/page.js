import { getData } from '../../util'
import { useEffect } from 'react'
import Header from './header';
import PlaceTab from './placetab';
import ImgCard from './imgcards';
import Comments from './comments';
import InputComment from './inputcomment'


export default function review({}) {
    const [data, setData] = useState([]);
    // const [skip, setSkip] = useState(20);
    // let cnt = 20;
    // let limit = 20;    
    useEffect(() => {
        getData(url)
        .then(data => {
            let newData = data.items;
            setData(newData)
        }).catch(error => console.log(error))
    })
    let items = data;
    

    return (
      <div>
        {/* <Header location={location}/> */}
        <div className='placeInfo'>
            {items.map(item => (
                <div key={item.contentsid}>
                    <Link href={`/place/${item.contentsid}`}>
                    <PlaceTab 
                        id={item.contentsid}
                        title={item.title}
                        thumb={item.repPhoto.photoid.thumbnailpath}
                    />
                    </Link>
                </div>
            ))}
        </div>
        <div id='reviewDetail'>
            <p class="score">★★★☆☆ 3.5</p>
            <p class="recommendIcon"></p>
            <p class="recommendCnts"></p>
            <div>
                <p class='nickname'>닉네임</p>
                <p>|</p>
                <p class='reviewDate'>2023.03.03</p>
            </div>
            <p>
                <a href={`/place/${item.contentsid}/review/${review.reviewid}/edit`}>수정</a>
                <p>|</p>
                <p>삭제</p>
            </p>
            <p class="commentIcon"></p>
            <p class="commentCnts"></p>
            <p class=''></p>
        </div>
        <ImgCard />
        <Comments />
        <InputComment value={contents} />
      </div>
    )
  }