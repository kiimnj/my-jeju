export default function CommentForm({contents}) {
  return (
    <form class='commentForm'>
        <input placeholder='댓글을 입력하세요.'></input>
        <button>게시</button>
    </form>
  )
}