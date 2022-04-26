import './App.css';

import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from 'react';
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; 
function App() {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    
    const NOTION_PAGE_ID = '8195f0adae7846648cb263d59b1c222b';
    
    fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, [])
  
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
          <button>추가</button>
          <NotionRenderer
          // blockMap={staticResponse}
          blockMap={response}
          
          fullPage={true}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
