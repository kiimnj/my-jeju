import { useState } from "react";

export default function ReviewText({ value, onChange }) {
  let [textLen, setTextLen] = useState(0);
  const onInput = (e) => {
    setTextLen(e.target.value.length);
    onChange(e.target.value)
  };
  
  return (
    <div id="reviewTextBox">
      <textarea id="reviewText" name="reviewText" value={value} onInput={onInput} placeholder="리뷰를 작성하세요."></textarea>
      <span id="reviewTextCnts">{textLen} / 500</span>
    </div>
    )
  }