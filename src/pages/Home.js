import "./home.css";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import { EffectCoverflow, Pagination } from "swiper";
const { allMsg } = require("../axios");
const Home = () => {
  const result = allMsg().then((results) => {
    return results;
  });
  return (
    <div className="home">
      <div className="body">
        <div className="box">안녕하세용</div>
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
                <h5>{result[1]}</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
              <SwiperSlide>
                <h5>123</h5>
                <p>456</p>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
