
export default function ReviewFooter({cntComment, cntLike}) {
    return (
            <div class="reveiwFooter">
                <div>
                <div className="commentCntWrap">
                    <span className="commentIcon"><i class="fa-regular fa-comment"></i></span>
                    <span className="commentCnts">{cntComment}</span>
                </div>

                <div className="reviewRecommendWrap">
                    <span className="reviewRecommendIcon"><i class="fa-regular fa-thumbs-up"></i></span>
                    <span className="reviewRecommendCnt">{cntLike}</span>
                </div>
                </div>
        </div>
    )
}