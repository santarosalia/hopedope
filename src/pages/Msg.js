import React, { useState, useEffect } from "react";
import "./msg.css";
const { addComment } = require("../axios");

const Msg = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    comment: "",
    pw: "",
  });

  const { name, comment, pw } = inputValue;

  const onChange = (e) => {
    const { className, value } = e.target;
    const nextInputs = {
      //스프레드 문법으로 기존의 객체를 복사한다.
      ...inputValue,
      [className]: value,
    };
    setInputValue(nextInputs);
  };
  return (
    <div className="msg">
      <h3>메시지 써주세요</h3>
      <div className="commentBox">
        <input placeholder="이름" className="name" onChange={onChange}></input>
        <input
          placeholder="비밀번호"
          className="pw"
          onChange={onChange}
          type="password"
          maxLength={4}
        ></input>
        <br></br>
        <textarea
          placeholder="글"
          className="comment"
          onChange={onChange}
          rows="2"
          cols="33"
        ></textarea>
        <br></br>

        <button
          onClick={() =>
            addComment(name, comment, pw).then(() => {
              window.location.reload();
            })
          }
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default Msg;