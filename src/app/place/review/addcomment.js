export default function AddComment({contents}) {
  return (
    <form id='addComment'>
      <div id='commentWrap'>
        <input id="commentInput" placeholder='댓글을 입력하세요.'></input>
        <button id="commentButton">게시</button>
      </div>
    </form>
  )
}