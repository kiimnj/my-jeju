import { getData } from "../util";


const api = process.env.NEXT_PUBLIC_API_KEY
const url = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${api}&locale=kr&page=1`

export default async function Index(props) {
    const data = await getData(url)
    const items = data.items.slice(97);
    console.log(items.length);

    return(
        <>
 
        </>
    )

}