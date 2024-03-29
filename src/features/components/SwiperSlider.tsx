import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";

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
import { Link } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

/*
//ECAQ Slides
const slidess: IDocuments[] = [
  {
    name: "Become A Global Friend",
    description: "FIFA Word Cup 2022",
    src: "http://www.ecaq.net/MyAssets/uploads/files/FIFA%20Qatar%20World%20Cup.jpg",
    btnLabel: "Lear More",
    btnUrl: "https://www.google.com",
    isExternalLink: true
  },
  {
    name: "What is ECAQ",
    description: "FIFA Prayer Walk",
    src: "http://www.ecaq.net/MyAssets/uploads/files/Prayer%20Walk.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false
  },
  {
    name: "slide 3",
    description: "ECAQ with Emir",
    src: "http://www.ecaq.net/MyAssets/uploads/images/HomeSlider/homebanner2.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false
  },
  {
    name: "slide 4",
    description: "Land donated for  ECAQ",
    src: "http://www.ecaq.net/MyAssets/uploads/images/HomeSlider/Home Banner8.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false   
  },
  {
    name: "slide 5",
    description: "Land Innauguration",
    src: "http://www.ecaq.net/MyAssets/uploads/images/HomeSlider/Home Banner3(1).jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false   
  },
  {
    name: "slide 6",
    description: "ECAQ Land Digging",
    src: "http://www.ecaq.net/MyAssets/uploads/images/HomeSlider/Home%20Banner4(1).jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false 
  },
]
 */

/**
//  //WORLDEA Slides */
// const slidess: IDocuments[] = [
//   {
//     name: "<p>Become A Global <br /> Friend</p>",
//     description:
//       "To provide a practical way for pastors, church leaders and laypersons to answer Jesus’ prayer for unity in John 17:21 by becoming part of the global evangelical family, the WEA is inviting you to become a WEA Global Friend.",
//     src: "http://localhost:3001/img1.jpeg",
//     btnLabel: "Lear More",
//     btnUrl: "https://www.google.com",
//     isExternalLink: true,
//   },
//   {
//     name: "What is <br />Evangelicalism?",
//     description:
//       "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
//     src: "http://localhost:3001/img4.jpeg",
//     btnLabel: "Lear More",
//     btnUrl: "",
//     isExternalLink: false,
//   },
// ];
// /**
//  //WORLDEA Slides */
// const slidess: IDocuments[] = [
//   {
//     name: "<p>Become A Global <br /> Friend</p>",
//     description:
//       "To provide a practical way for pastors, church leaders and laypersons to answer Jesus’ prayer for unity in John 17:21 by becoming part of the global evangelical family, the WEA is inviting you to become a WEA Global Friend.",
//     src: "https://worldea.org/wp-content/uploads/2023/04/global-friends-banner-2.jpg",
//     btnLabel: "Lear More",
//     btnUrl: "https://www.google.com",
//     isExternalLink: true,
//   },
//   {
//     name: "What is <br />Evangelicalism?",
//     description:
//       "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
//     src: "https://worldea.org/wp-content/uploads/2024/01/what-is-evangelicalism.jpg",
//     btnLabel: "Lear More",
//     btnUrl: "",
//     isExternalLink: false,
//   },
//   {
//     name: "Love Obey <br /> & Worship",
//     description:
//       "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
//     src: "https://latoyaedwards.net//wp-content/uploads/2018/01/13.png",
//     btnLabel: "Lear More",
//     btnUrl: "",
//     isExternalLink: false,
//   },
// ];

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

export default observer(function SwiperSlider() {
  const { homebannerStore } = useStore();
  const { getHomeBanners } = homebannerStore;

  return (
    <>
      <Swiper
        className="mySwiper"
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log("slide change")}
      >
        {/* <SwiperSlide>
          <div className="aspect-w-16 aspect-h-9 lg:-mt-20">
            <iframe
              className=""
              src="https://www.youtube.com/embed/6-aVluqleIc?rel=0?version=3&autoplay=1&mute=1&loop=1&controls=0&&showinfo=0"
              allow="autoplay"
            ></iframe>
          </div>
        </SwiperSlide> */}


          {getHomeBanners &&
            getHomeBanners.map((docs) => {
            if (docs.isVideo) {
              return <SwiperSlide>
                  <div className="aspect-w-16 aspect-h-9 lg:-mt-20">
                    <iframe
                      className=""
                      src={docs.videoUrl}
                      allow="autoplay"
                    ></iframe>
                  </div>
                </SwiperSlide>
            }
    
              return <SwiperSlide key={docs.name}>
              <div className="aspect-w-16 aspect-h-9 lg:-mt-20">
                <img
                  src={docs.imageDesktop}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                {/* 
                  COLOR OVERLAY
                  <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div> 
                */}
                <div
                  className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <div
                  className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>

                <div className="mx-auto max-w-7xl px-16">
                  <div className="mx-auto max-w-2xl lg:mx-0 mt-72">
                    <h2 className="text-3xl font-semibold text-appGreen sm:text-6xl">
                      {parse(docs.desc)}
                    </h2>
                  </div>
                  {docs.buttonText.trim().length !== 0 &&

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                      <Link
                        to={docs.buttonUrl}
                        className="text-white bg-appBlue hover:bg-indigo-900 px-4 py-3 rounded-full"
                        target={docs.buttonUrlExternal ? '_blank':'_self'}
                      >
                        {docs.buttonText} <span aria-hidden="true">&rarr;</span>
                      </Link>
                      <br />
                      {/* <SwiperButtonPrev>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                          </svg>
                        </SwiperButtonPrev>
                        <SwiperButtonNext>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </SwiperButtonNext> */}
                    </div>
                  }
                </div>
              </div>
            </SwiperSlide>
          })}
      </Swiper>
    </>
  );
});
