import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../../assets/images/vlcsnap-2021-02-24-00h31m29s139.png";
import s2 from "../../assets/images/vlcsnap-2021-02-24-00h36m21s939.png";
import s3 from "../../assets/images/vlcsnap-2021-02-24-01h08m42s083.png";
import s4 from "../../assets/images/vlcsnap-2021-02-24-01h14m01s999.png";
import s5 from "../../assets/images/vlcsnap-2021-05-12-13h25m15s983.png";
import s6 from "../../assets/images/vlcsnap-2021-05-12-13h29m40s652.png";
import s7 from "../../assets/images/vlcsnap-2021-05-12-13h48m39s505.png";

import "swiper/swiper-bundle.css";
import "./Main.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
  return (
    <div className="wrapper-swaper">
      <Swiper
        className="container-swaper"
        autoHeight={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper-slide">
          <img src={s1} />
          <div>Бегущий по лезвию, 1982</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={s2} />
          <div>Бешеные псы, 1992</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={s3} />
          <div>Ичи-киллер, 2001</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={s4} />
          <div>Пылающий, 2018</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={s5} />
          <div>Дикая груша, 2018</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={s6} />
          <div>Драйв, 2011</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={s7} />
          <div>Ла-Ла-Лэнд, 2016</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
