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

    console.log(e.target); //이벤트가 발생한 타겟의 요소를 출력
    console.log(e.target.value); //이벤트가 발생한 타겟의 Value를 출력
    setText(e.target.value); //이벤트 발생한 value값으로 {text} 변경
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
          <input onChange={onChange} className="name"></input>
          <input className="pw" onChange={onChange}></input>
          <input className="comment" onChange={onChange}></input>
          <button onClick={addComment(name, comment, pw)}>추가</button>
        </div>
      </div>
    </div>
  );
}

export default App;
