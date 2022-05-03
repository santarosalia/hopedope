import "./home.css";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import { EffectCoverflow, Pagination } from "swiper";
import { useState, useEffect } from "react";

const { allMsg } = require("../axios");
const Home = () => {
  const [result, setResult] = useState(null);

  allMsg().then((results) => {
    setResult(results);
  });

  if (result == null) return <h2>Loading posts...</h2>;
  return (
    <div className="home">
      <div className="body">
        <div className="box">text</div>
        <div id="react-naver-map" className="naverMap">
          <RenderAfterNavermapsLoaded ncpClientId={"chnhlyto0x"}>
            <NaverMap
              id="react-naver-map"
              style={{
                width: "100%",
                height: "250px",
              }}
              defaultCenter={{ lat: 37.521602, lng: 126.890874 }}
              defaultZoom={15}
            >
              <Marker
                position={{ lat: 37.521602, lng: 126.890874 }}
                onClick={() => {
                  alert("here");
                }}
                title={"우리집"}
              />
            </NaverMap>
          </RenderAfterNavermapsLoaded>
        </div>
        <div>
          <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h4>{result[0].name}</h4>
                <p>{result[0].msg}</p>
              </SwiperSlide>
              <SwiperSlide>
                <h4>{result[1].name}</h4>
                <p>{result[1].msg}</p>
              </SwiperSlide>
              <SwiperSlide>
                <h4>{result[2].name}</h4>
                <p>{result[2].msg}</p>
              </SwiperSlide>
              <SwiperSlide>
                <h4>{result[3].name}</h4>
                <p>{result[3].msg}</p>
              </SwiperSlide>
              <SwiperSlide>
                <h4>{result[4].name}</h4>
                <p>{result[4].msg}</p>
              </SwiperSlide>
              <SwiperSlide>
                <h4>{result[5].name}</h4>
                <p>{result[5].msg}</p>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
