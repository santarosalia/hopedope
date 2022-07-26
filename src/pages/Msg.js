import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./msg.css";
import { Button, FormGroup } from "@mui/material";

const { addComment } = require("../axios");
// import { makeStyles } from "@mui/material/core";
// import { height } from "@mui/system";

// const useStyles = makeStyles(() => {
//   textArea: {
//     height: "200px";
//   }
// });
const Msg = () => {
  // const classes = useStyles();
  const maxByte = 120;
  const [inputValue, setInputValue] = useState({
    name: "",
    comment: "",
    pw: "",
  });
  const [currByte, setCurrByte] = useState(0);

  const { name, comment, pw } = inputValue;

  const onChange = (e) => {
    const { value, id } = e.target;

    const nextInputs = {
      ...inputValue,
      [id]: value,
    };
    setInputValue(nextInputs);

    if (e.target.id == "comment") {
      const text = e.target.value;
      const textLength = text.length;

      let totalByte = 0;
      for (let i = 0; i < textLength; i++) {
        const eachChar = text.charAt(i);
        const uniChar = escape(eachChar);
        if (uniChar.length > 4) {
          //한글 : 2Byte
          totalByte += 2;
        } else {
          //영 특문 : 1Byte
          totalByte += 1;
        }
      }
      setCurrByte(totalByte);

      if (currByte > maxByte) {
        alert("최대 글자수를 넘지 말아주세요!");

        e.target.value = text.substring(0, textLength - 2);
      }
    }
  };

  return (
    <div className="msg">
      <h3>메시지 써주세요</h3>
      <div className="commentBox">
        <FormGroup
          onSubmit={() => {
            if (
              inputValue.name == "" ||
              inputValue.comment == "" ||
              inputValue.pw == ""
            ) {
              alert("빈칸은 없어야 합니다!");
              return;
            }
            addComment(inputValue.name, inputValue.comment, inputValue.pw).then(
              () => {
                window.location.reload();
              }
            );
          }}
        >
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            className="name"
            onChange={onChange}
            size="small"
          />
          <br></br>
          <br></br>
          <TextField
            id="pw"
            label="비밀번호"
            variant="outlined"
            type="password"
            className="pw"
            onChange={onChange}
            size="small"
          />
          <br></br>
          <br></br>
          <p>{currByte}/120 Bytes</p>
          <TextField
            multiline
            id="comment"
            label="글"
            variant="outlined"
            className="comment"
            onChange={onChange}
            size="small"
          />

          <br></br>
          <Button type="submit">등록</Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Msg;
