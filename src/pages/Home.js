import "./home.css";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
const naverMapComponent = () => {
  const id = "chnhlyto0x";
  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{
        width: "100%",
        height: "100vh",
      }}
      defaultCenter={{
        lat: 37.521602,
        lng: 126.890874,
      }}
      defaultZoom={10}
    />
  );
};
const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="box">안녕하세용</div>
        <div>
          <RenderAfterNavermapsLoaded
            ncpClientId={"chnhlyto0x"}
            error={<p>map load error</p>}
            loading={<p>map loading ...</p>}
          >
            <naverMapComponent />
          </RenderAfterNavermapsLoaded>
        </div>
      </div>
    </div>
  );
};

export default Home;
