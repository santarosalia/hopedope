import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Msg from "./pages/Msg";
import Photo from "./pages/Photo";
import "./App.css";
import Helmet from "react-helmet";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.text =
      'Kakao.init("7d350e6dfaeae1fb62dd5827979d4a88");Kakao.Link.createScrapButton({container: "#kakao-link-btn",requestUrl: "https://santarosalia.github.io/hopedope/",templateId: 75771,templateArgs: {THU: "https://raw.githubusercontent.com/santarosalia/hopedope/master/public/img/thumb.jpeg"}});';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>소개</Link>
        <Link to={"/photo"}>사진</Link>
        <Link to={"/msg"}>방명록</Link>
        <div className="snow-bg"></div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/msg" element={<Msg />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>

      <footer>
        footer
        <a id="kakao-link-btn">
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            alt="카카오링크 보내기 버튼"
          />
        </a>
      </footer>
      <Helmet>
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Helmet>
    </div>
  );
};

export default App;
