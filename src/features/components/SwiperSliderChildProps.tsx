import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Autoplay,
  A11y,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { ReactNode } from "react";


type Props = {
  children: ReactNode;  
}

export default function SwiperSliderChildProps({ children }: Props) {
  //const swiper = useSwiper();
  
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >      
        {children}
      </Swiper>
    </>
  );
}
