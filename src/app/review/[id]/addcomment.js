

export default function AddComment({setNewComment, handleSubmit}) {


  return (
    <form id='addComment' onSubmit={handleSubmit}>
      <div id='commentWrap'>
        <input id="commentInput" onChange={({target}) => setNewComment(target.value) } placeholder='댓글을 입력하세요.' autoComplete={false}></input>
        <button id="commentButton">게시</button>
      </div>
    </form>
  )
}