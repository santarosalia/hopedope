import "./home.css";
<script
  type="text/javascript"
  src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=chnhlyto0x"
></script>;
var mapOptions = {
  center: new naver.maps.LatLng(27.33717815799463, -112.26887415322668),
  zoom: 10,
};

var map = new naver.maps.Map("map", mapOptions);

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="box">안녕하세용</div>
        <div id="map" style="width:100%;height:400px;"></div>
      </div>
    </div>
  );
};

export default Home;
