export default function CommentForm({contents}) {
  return (
    <form class='commentForm'>
        <input id="commentInput" placeholder='댓글을 입력하세요.'></input>
        <button id="commentButton">게시</button>
    </form>
  )
}