import "./App.css";

import React, { useState, useEffect } from "react";

const { addComment } = require("./axios");

function App() {
  //text : 현재값 / setText: 변경할 값 / useState({초기값})
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

  // useEffect(() => {

  //   const NOTION_PAGE_ID = '8195f0adae7846648cb263d59b1c222b';

  //   fetch(`https://notion-api.splitbee.io/v1/table/8195f0adae7846648cb263d59b1c222b`)
  //     .then(res => res.json())
  //     .then((resJson) => {
  //       setResponse(resJson);
  //     });
  // }, [])

  return (
    <div className="App">
      <header className="header">
        <div className="menu">메뉴1</div>
        <div className="menu">메뉴2</div>
        <div className="menu">메뉴3</div>
        <div className="menu">메뉴4</div>
      </header>
      <div className="snow-bg"></div>
      <br></br>
      <div className="body">
        <div className="box">안녕하세용</div>
        <div className="commentBox">
          <input
            placeholder="이름"
            className="name"
            onChange={onChange}
          ></input>
          <input
            placeholder="비밀번호"
            className="pw"
            onChange={onChange}
          ></input>
          <input
            placeholder="글"
            className="comment"
            onChange={onChange}
          ></input>

          <button
            onClick={() =>
              addComment(name, comment, pw).then(() => {
                window.location.reload();
              })
            }
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
