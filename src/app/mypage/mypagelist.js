import Link from "next/link";

export default function MyPageList() {

    return (
        <div id="myPageListContainer">
            <div className="myPageMyReview myPageLists">
                <i class="fa-solid fa-pen-to-square myPageIcon"></i>
                <Link className='myPageLink' href='#'>나의 리뷰</Link>
            </div>

            <div className="myPageLiked myPageLists">
                <i class="fa-solid fa-heart myPageIcon"></i>
                <Link className='myPageLink' href='#'>관심 장소</Link>
            </div>

            <div className="myPageVisited myPageLists">
                <i class="fa-solid fa-circle-check myPageIcon"></i>
                <Link className='myPageLink' href='#'>방문 장소</Link>
            </div>

            <div className="myPageMyPlan myPageLists">
                <i class="fa-solid fa-plane myPageIcon"></i>
                <Link className='myPageLink' href='#'>여행 계획</Link>
            </div>

            <div className="myPageMyMap myPageLists">
                <i class="fa-solid fa-map-location-dot myPageIcon"></i>
                <Link className='myPageLink' href='#'>나의 지도</Link>
            </div>

            <div className="myPageLists">
                <i class="fa-solid fa-right-from-bracket myPageIcon"></i>
                <Link className='myPageLink' href='#'>로그아웃</Link>
            </div>
        </div>
    )
  }