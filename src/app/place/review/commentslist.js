export default function CommentsList() {
    return (
        <div class="commentsList">
            <img id="commentProfile" src="/profile.png" alt="Img" style={{"border":"1px solid black"}} />
            <span class="nickname">nickname</span>
            <span>&ensp;|&ensp;</span>
            <span class="date">date</span>
            <span><i class="icon fa-regular fa-thumbs-up"></i></span>
            <span class="recommendCnt">Cnt</span>
            <p class="comment">댓글입니다.</p>
        </div>
    )
}