export default function CommentsList({comment}) {
    
    return (
        <div className="commentsList">
            {comment.map(item => (
                <>
                    <div className="commentWrap" key={item.id}>
                        <img id="commentProfile" src="/profile.png" alt="Img" />
                        <span className="nickname">{item.userid}</span>
                        <span>|</span>
                        <span className="date">{item.dateTime}</span>
                        
                        <p className="comment">{item.comment}</p>
                    </div>
                    
                    <div style={{'margin':'25px 10px'}}><hr /></div>
                </>
            ))}
            
            
            

        </div>
    )
}