import "./home.css";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="box">안녕하세용</div>
        <div id="react-naver-map">
          <RenderAfterNavermapsLoaded ncpClientId={"chnhlyto0x"}>
            <NaverMap
              mapDivId={"react-naver-map"} // default: react-naver-map
              style={{
                width: "100%",
                height: "400px",
              }}
              defaultCenter={{ lat: 37.521602, lng: 126.890874 }}
              defaultZoom={10}
            >
              <Marker
                position={{ lat: 37.521602, lng: 126.890874 }}
                onClick={() => {
                  alert("here");
                }}
              />
            </NaverMap>
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    </div>
  );
};

export default Home;
