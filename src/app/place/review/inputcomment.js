import React from 'react'

export default function InputComment({contents}) {
  return (
    <div class='inputComment'>
        <input placeholder='댓글을 입력하세요.'></input>
        <button>게시</button>
    </div>
  )
}