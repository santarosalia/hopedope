import "./home.css";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const { allMsg } = require("../axios");

const Home = () => {
  const [result, setResult] = useState(null);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const clipboardCopy = (e) => {
    navigator.clipboard.writeText(e.target.className);
  };
  useEffect(() => {
    allMsg().then((results) => {
      setResult(results);
    });
  }, [result]);

  const Myswiper = () => {
    const MySlider = () => {
      const resultList = result.map((item) => {
        <SwiperSlide>
          <h4>{item.name}</h4>
          <p>{item.msg}</p>
        </SwiperSlide>;
      });
      return resultList;
    };

    return (
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* style={{ backgroundColor: "white" }} */}
          <MySlider />
        </Swiper>
      </>
    );
  };

  if (result == null)
    return (
      <div className="home">
        <div className="body">
          <div className="box">text</div>
          <br></br>
          <br></br>
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
                <Marker position={{ lat: 37.521602, lng: 126.890874 }} />
              </NaverMap>
            </RenderAfterNavermapsLoaded>
          </div>

          <div className="address">
            <a href="https://map.naver.com/v5/search/선유로88-8/address/">
              주소 : 선유로 88-8
            </a>
          </div>
          <br></br>
          <br></br>
          <div className="info">
            <div>
              <Button onClick={handleOpen1}>Open modal1</Button>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title1"
                aria-describedby="modal-modal-description1"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title1"
                    variant="h6"
                    component="h2"
                  >
                    title1
                  </Typography>
                  <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
                    <a href="tel:010-4050-0323">전화번호 : 전화번호</a>
                    <p className={"텍스트"} onClick={clipboardCopy}>
                      복사
                    </p>
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div>
              <Button onClick={handleOpen2}>Open modal2</Button>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title2"
                aria-describedby="modal-modal-description2"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title2"
                    variant="h6"
                    component="h2"
                  >
                    title2
                  </Typography>
                  <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                    description2
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="loading">
            <h2>loading...</h2>
            <img
              style={{ width: "100%" }}
              src="https://raw.githubusercontent.com/santarosalia/hopedope/master/public/img/loading.gif"
            ></img>
          </div>
        </div>
      </div>
    );
  return (
    <div className="home">
      <div className="body">
        <div className="box">text</div>
        <br></br>
        <br></br>
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
              <Marker position={{ lat: 37.521602, lng: 126.890874 }} />
            </NaverMap>
          </RenderAfterNavermapsLoaded>
        </div>

        <div className="address">
          <a href="https://map.naver.com/v5/search/선유로88-8/address/">
            주소 : 선유로 88-8
          </a>
        </div>
        <br></br>
        <br></br>
        <div className="info">
          <div>
            <Button onClick={handleOpen1}>Open modal1</Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title1"
              aria-describedby="modal-modal-description1"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title1" variant="h6" component="h2">
                  title1
                </Typography>
                <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
                  <a href="tel:010-4050-0323">전화번호 : 전화번호</a>
                  <p className={"텍스트"} onClick={clipboardCopy}>
                    복사
                  </p>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div>
            <Button onClick={handleOpen2}>Open modal2</Button>
            <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title2"
              aria-describedby="modal-modal-description2"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title2" variant="h6" component="h2">
                  title2
                </Typography>
                <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
                  description2
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="swiper">
          <Myswiper />
        </div>
      </div>
    </div>
  );
};

export default Home;
