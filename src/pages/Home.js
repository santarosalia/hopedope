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
  const [result, setResult] = useState([
    {
      name: "",
      msg: "",
      pw: "",
    },
  ]);

  allMsg().then((results) => {
    for (let i = 0; i < results.length - 1; i++) {
      const dic = {
        name: results[i].properties.name.title[0].text.content,
        msg: results[i].properties.comment.rich_text[0].text.content,
        pw: results[i].properties.pw.rich_text[0].text.content,
      };
      if (results[i] != "undefined" && results[i] != null) {
        setResult([...result, dic]);
      }
    }
  });
  result.map((val) => {
    console.log(val.name);
    console.log(val.msg);
  });

  // console.log(result[0].properties.name.title[0].text.content);
  // console.log(result[0].properties.comment.rich_text[0].text.content);
  // console.log(result[0].properties.pw.rich_text[0].text.content);

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
                <h5>{result[5].name}</h5>
                <p>{result[5].msg}</p>
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
