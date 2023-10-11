import { getData } from "@/app/util"


export default async function Detail(props) {
    const location = "detail"
    const param = props.params.id
    const api = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&cid=${param}`
    const resp = await getData(url)
    const data = resp.items[0]

    console.log(data)

    return (
        <>
            <img src={data.repPhoto.photoid.imgpath} width={393} height={400}/>
            <div class="title">
                <div>
                    <p>{data.region2cd.label}</p>
                    <h5>{data.title}</h5>
                    <p class="score">★★★☆☆ 3.5 / 358개 리뷰</p>
                </div>
                <div>
                    
                </div>
            </div>
            
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <input type="radio" name="nav" id="explain"/>
                    <label for="explain">관광정보</label>
                </li>
                <li class="nav-item">
                    <input type="radio" name="nav" id="explain"/>
                    <label for="explain">관광정보</label>
                </li>
                <li class="nav-item">
                    <input type="radio" name="nav" id="explain"/>
                    <label for="explain">관광정보</label>
                </li>
                <li class="nav-item">
                    <input type="radio" name="nav" id="explain"/>
                    <label for="explain">관광정보</label>
                </li>
            </ul>
        </>
    )
}