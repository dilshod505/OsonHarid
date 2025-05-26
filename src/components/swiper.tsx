import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export const SwiperComponent = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[1300px] rounded-xl"
      >
        <SwiperSlide>
          <img src="/public/images/swiper-1.png" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/swiper-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/swiper-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/swiper-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/swiper-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/swiper-1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
