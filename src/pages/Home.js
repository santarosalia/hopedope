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
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const { allMsg } = require("../axios");
const Home = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    allMsg().then((results) => {
      setResult(results);
    });
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (result == null)
    return (
      <div>
        <h2>loading...</h2>
        <img
          style={{ width: "100%" }}
          src="https://raw.githubusercontent.com/santarosalia/hopedope/master/public/img/loading.gif"
        ></img>
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
            주소 : 주소
          </a>
          <br></br>

          <a href="tel:010-4050-0323">전화번호 : 전화번호</a>
        </div>
        <div className="info">
          <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="spring-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>

        <div>
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
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[0].name}</h4>
                <p>{result[0].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[1].name}</h4>
                <p>{result[1].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[2].name}</h4>
                <p>{result[2].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[3].name}</h4>
                <p>{result[3].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[4].name}</h4>
                <p>{result[4].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[5].name}</h4>
                <p>{result[5].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[6].name}</h4>
                <p>{result[6].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[7].name}</h4>
                <p>{result[7].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[8].name}</h4>
                <p>{result[8].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[9].name}</h4>
                <p>{result[9].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[10].name}</h4>
                <p>{result[10].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[11].name}</h4>
                <p>{result[11].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[12].name}</h4>
                <p>{result[12].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[13].name}</h4>
                <p>{result[13].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[14].name}</h4>
                <p>{result[14].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[15].name}</h4>
                <p>{result[15].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[16].name}</h4>
                <p>{result[16].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[17].name}</h4>
                <p>{result[17].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[18].name}</h4>
                <p>{result[18].msg}</p>
              </SwiperSlide>
              <SwiperSlide style={{ backgroundColor: "white" }}>
                <h4>{result[19].name}</h4>
                <p>{result[19].msg}</p>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
