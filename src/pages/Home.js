import "./home.css";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="box">안녕하세용</div>
        <div id="react-naver-map">
          <RenderAfterNavermapsLoaded clientId={"chnhlyto0x"}>
            <NaverMap
              mapDivId={"react-naver-map"} // default: react-naver-map
              style={{
                width: "100%",
                height: "400px",
              }}
              defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
              defaultZoom={10}
            />
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    </div>
  );
};

export default Home;
