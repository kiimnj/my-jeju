export default function CommentsList () {
    return (
        <div class="commentsList">
            <img class="profileImg" alt="Img" style={{"border":"1px solid black"}} />
            <span class="nickname">nickname</span>
            <span>&ensp;|&ensp;</span>
            <span class="date">date</span>
            <span><img class="recommendIcon" alt="Icon" /></span>
            <span class="recommendCnt">Cnt</span>
            <p class="comment">comment</p>
        </div>
    )
}