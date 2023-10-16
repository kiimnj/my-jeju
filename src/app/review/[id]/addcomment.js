

export default function AddComment({setNewComment, handleSubmit}) {


  return (
    <form id='addComment' onSubmit={handleSubmit}>
      <div id='commentWrap'>
        <input id="comentInput" onChange={({target}) => setNewComment(target.value) } placeholder='댓글을 입력하세요.' name="comment"></input>
        <button id="commentButton">게시</button>
      </div>
    </form>
  )
}