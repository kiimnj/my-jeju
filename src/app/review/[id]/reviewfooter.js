
export default function ReviewFooter({cntComment, allLike, handleLike, likeId}) {
    

    return (
            <div class="reveiwFooter">
                <div>
                <div className="commentCntWrap">
                    <span className="commentIcon"><i class="fa-regular fa-comment"></i></span>
                    <span className="commentCnts">{cntComment}</span>
                </div>

                <div className="reviewRecommendWrap" onClick={handleLike}>
                    <span className="reviewRecommendIcon">
                        {likeId ? <i class="fa-solid fa-thumbs-up"></i> : <i class="fa-regular fa-thumbs-up"></i>}
                    </span>
                    <span className="reviewRecommendCnt">{allLike.length}</span>
                </div>
                </div>
        </div>
    )
}