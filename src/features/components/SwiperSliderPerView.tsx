import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";


// type ButtonProps = {
//   children: ReactNode;
// };
// const SwiperButtonPrev = ({ children }: ButtonProps) => {
//   const swiper = useSwiper();
//   return <button onClick={() => swiper.slidePrev()}>{children}</button>;
// };
// const SwiperButtonNext = ({ children }: ButtonProps) => {
//   const swiper = useSwiper();
//   return <button onClick={() => swiper.slideNext()}>{children}</button>;
// };

export default observer(function SwiperSliderPerView() {
  const { memberStore } = useStore()
  const { loadMembers, getMembersByName } = memberStore

  useEffect(() => {
    loadMembers()
  }, [loadMembers])
  
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          //when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          //when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          //when window width is >= 640px
          960: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation
        // pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        { getMembersByName &&
          getMembersByName.map((member) => (
            <SwiperSlide key={member.memberName}>
              <div className="bg-white">
                <div className="group mx-auto auto-rows-fr gap-8 lg:mx-0 lg:max-w-none h-72">
                  <article className="flex justify-center relative isolate overflow-hidden rounded-xl bg-gray-900 h-full">
                    <img
                      src={member.logoUrl}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/30"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                    <div className="flex flex-col justify-end text-center my-4">
                      <h3 className="text-md font-semibold text-gray-50">
                        <a>
                          <span className="absolute inset-0"></span>
                          {parse(member.memberName)}
                        </a>
                      </h3>
                    </div>
                  </article>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
})
