"use client"
import { useEffect, useState } from "react";
import { addComment } from "@/app/util";
import AddComment from './addcomment';
import CommentsList from './commentslist';

export default function Comment({comment, param}) {
    const [newComment, setNewComment] = useState();
    const [commentList, setCommentList] = useState(comment)

    const url = "http://localhost:3001/comment"
    console.log(commentList)
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        addComment(url, "user02", param, newComment)
        .then(data => setCommentList([data, ...commentList]));
    }
    

    return(
        <>
            <AddComment handleSubmit={handleSubmit} setNewComment={setNewComment}/>
            <CommentsList comment={commentList} />
        </>
    )
}