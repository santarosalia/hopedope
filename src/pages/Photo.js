import "./photo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import { EffectCoverflow, Pagination } from "swiper";
const Photo = () => {
  return (
    <div className="photo">
      <h3>사진입니당</h3>
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
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/img/1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/img/8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://santarosalia.github.io/hopedope/public/10.jpg" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Photo;
