import './App.css';

// import React, { useState, useEffect } from 'react';
const {command} = require('./command');



function App() {
  // const [response, setResponse] = useState({});
  

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
      <div className='menu'>메뉴1</div>
      <div className='menu'>메뉴2</div>
      <div className='menu'>메뉴3</div>
      <div className='menu'>메뉴4</div>
      </header>
      <div className='snow-bg'></div><br></br>
      <div className='body'>
        <div className='box'>안녕하세용</div>
        <div className='comment'>
          <button onClick={()=>{command(1,'김동현','안녕','1234')}}>추가</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
