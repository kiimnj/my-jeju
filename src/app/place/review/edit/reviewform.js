export default function ReviewForm() {
  return (
    <div id="reviewForm">
        <form>
            <input type="text" placeholder="리뷰를 작성하세요."></input>
            <br />
            <button className="reviewButton">리뷰 등록하기</button>
        </form>
    </div>
  )
}