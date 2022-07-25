import React, { useState } from "react";
import TextField from "@mui/material/TextField";
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
    const { value, id } = e.target;

    const nextInputs = {
      ...inputValue,
      [id]: value,
    };
    setInputValue(nextInputs);
    console.log(e);
  };

  return (
    <div className="msg">
      <h3>메시지 써주세요</h3>
      <div className="commentBox">
        <form>
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            className="name"
            onChange={onChange}
          />
          <TextField
            id="pw"
            label="비밀번호"
            variant="outlined"
            type="password"
            className="pw"
            onChange={onChange}
          />
          <TextField
            multiline
            id="comment"
            label="글"
            variant="outlined"
            className="comment"
            onChange={onChange}
          />
          {/* 
          <input
            required
            placeholder="이름"
            className="name"
            onChange={onChange}
          ></input>
          <input
            required
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
          ></textarea> */}
          <br></br>
          <button
            type="button"
            onClick={() => {
              if (
                inputValue.name == "" ||
                inputValue.comment == "" ||
                inputValue.pw == ""
              ) {
                alert("빈칸은 없어야 합니다!");
                return;
              }
              addComment(
                inputValue.name,
                inputValue.comment,
                inputValue.pw
              ).then(() => {
                window.location.reload();
              });
            }}
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default Msg;
