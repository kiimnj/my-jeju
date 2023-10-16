import Link from "next/link";

export default function ReviewHeader() {
    return (
        <div class="reviewHeader">
            <div id='reviewInfo'>
                <img id="commentProfile" src="/profile.png" alt="Img" />
                <span class='nickname'>닉네임</span>
                <span>|</span>
                <span class='date'>2023.03.03</span>
            </div>
            <div id='reviewEdit'>
                <span><Link href='/place/review/edit'>수정</Link>  |  삭제</span>
            </div>
        </div>
    )
}