import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Msg from "./pages/Msg";
import Photo from "./pages/Photo";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Link to={"/hopedope/"}>Home</Link>
        <Link to={"/hopedope/about"}>소개</Link>
        <Link to={"/hopedope/photo"}>사진</Link>
        <Link to={"/hopedope/msg"}>방명록</Link>
        <div className="snow-bg"></div>
      </header>

      <Routes>
        <Route path="/hopedope/" element={<Home />} />
        <Route path="/hopedope/about" element={<About />} />
        <Route path="/hopedope/msg" element={<Msg />} />
        <Route path="/hopedope/photo" element={<Photo />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <footer>footer</footer>
    </div>
  );
};

export default App;
