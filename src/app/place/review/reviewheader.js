
export default function ReviewHeader() {
    return (
            <div class="reviewHeader">
            <span id='reviewInfo'>
                <span class='nickname'>닉네임</span>
                <span>&ensp;|&ensp;</span>
                <span class='reviewDate'>2023.03.03</span>
            </span>
            <span id='reviewEdit'>
                <span>수정  |  삭제</span>
            </span>
        </div>
    )
}