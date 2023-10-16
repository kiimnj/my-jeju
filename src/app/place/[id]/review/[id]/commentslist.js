export default function CommentsList() {
    return (
        <div class="commentsList">
            <div className="commentWrap">
                <img id="commentProfile" src="/profile.png" alt="Img" />
                <span class="nickname">nickname</span>
                <span>|</span>
                <span class="date">date</span>
                <span className="recommendWrap">
                    <span><i class="icon fa-regular fa-thumbs-up"></i></span>
                    <span class="recommendCnt">Cnt</span>
                </span>
                <p class="comment">댓글입니다.</p>
            </div>
            
            <div style={{'margin':'20px'}}><hr /></div>
            
            
            <div className="commentWrap">
                <img id="commentProfile" src="/profile.png" alt="Img" />
                <span class="nickname">nickname</span>
                <span>|</span>
                <span class="date">date</span>
                <span className="recommendWrap">
                    <span><i class="icon fa-regular fa-thumbs-up"></i></span>
                    <span class="recommendCnt">Cnt</span>
                </span>
                <p class="comment">댓글입니다.</p>
            </div>
            
            <div style={{'margin':'25px 10px'}}><hr /></div>

            <div className="commentWrap">
                <img id="commentProfile" src="/profile.png" alt="Img" />
                <span class="nickname">nickname</span>
                <span>|</span>
                <span class="date">date</span>
                <span className="recommendWrap">
                    <span><i class="icon fa-regular fa-thumbs-up"></i></span>
                    <span class="recommendCnt">Cnt</span>
                </span>
                <p class="comment">댓글입니다.</p>
            </div>
            
            <div style={{'margin':'25px 10px'}}><hr /></div>

        </div>
    )
}