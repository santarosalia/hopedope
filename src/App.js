import './App.css';
const {addComment} = require('./notion');

function App() {
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
          <button onClick={addComment('김동현','안녕하세용','1234')}>추가</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
