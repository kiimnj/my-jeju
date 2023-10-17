import Link from "next/link";

export default function ReviewHeader({name, dateTime}) {
    return (
        <div class="reviewHeader">
            <div id='reviewInfo'>
                <img id="commentProfile" src="/profile.png" alt="Img" />
                <span class='nickname'>{name}</span>
                <span>|</span>
                <span class='date'>{dateTime}</span>
            </div>
            <div id='reviewEdit'>
                <span><Link href='/review/create'>수정</Link>  |  삭제</span>
            </div>
        </div>
    )
}