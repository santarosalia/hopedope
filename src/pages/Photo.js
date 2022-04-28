import "./photo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel from "./carousel";
import "swiper/css";
const Photo = () => {
  return (
    <div className="photo">
      <h3>사진입니당</h3>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Photo;
