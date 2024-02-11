import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";

import { IDocuments } from "../../shared/types/IDocument";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const slidess: IDocuments[] = [
  {
    name: "<p>NGC</p>",
    description:
      "To provide a practical way for pastors, church leaders and laypersons to answer Jesus’ prayer for unity in John 17:21 by becoming part of the global evangelical family, the WEA is inviting you to become a WEA Global Friend.",
    src: "/memberlogo/NGC.jpg",
    btnLabel: "Lear More",
    btnUrl: "https://www.google.com",
    isExternalLink: true,
  },
  {
    name: "NCC",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/NCC.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "JR King Church",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/JRKing%20church.png",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "Jesus Christ <br /> Light of the Nation</p>",
    description:
      "To provide a practical way for pastors, church leaders and laypersons to answer Jesus’ prayer for unity in John 17:21 by becoming part of the global evangelical family, the WEA is inviting you to become a WEA Global Friend.",
    src: "/memberlogo/Jesus%20Christ%20Light%20of%20the%20Nation.png",
    btnLabel: "Lear More",
    btnUrl: "https://www.google.com",
    isExternalLink: true,
  },
  {
    name: "ICF",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/ICF%20LOGO.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "Great Commission Church",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/Great%20Commission%20Church.png",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "VIJF",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/VIJF.png",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "TLSC",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/TLSC%20logo.png",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "TFC2i",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/TFC2i%20Logo.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
  {
    name: "JCCM",
    description:
      "The World Evangelical Alliance and the Kirby Laing Centre for Public Theology in Cambridge continue to explore the question of what it means to be evangelicals amidst the changing landscape of global Christianity.",
    src: "/memberlogo/JCCM.jpg",
    btnLabel: "Lear More",
    btnUrl: "",
    isExternalLink: false,
  },
];

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

export default function SwiperSliderPerView() {
  return (
    <>
      {/* <div className="mb-4 sm:mb-0 flex items-center justify-between">
        <div className="">
          <h1 className="text-lg font-extrabold text-gray-900">
            Explore Vehicles
          </h1>
        </div>
        <div className="flex">
          <SwiperButtonPrev>
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
          </SwiperButtonNext>
        </div>
      </div> */}
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
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidess &&
          slidess.map((docs) => (
            <SwiperSlide key={docs.name}>
              <div className="bg-white">
                <div className="p-8 sm:p-4 group mx-auto auto-rows-fr gap-8 sm:mt-8 lg:mx-0 lg:max-w-none">
                  <article className="relative isolate flex items-center justify-between overflow-hidden rounded-xl bg-gray-900 px-6 pb-6 pt-48 lg:pt-56">
                    <img
                      src={docs.src}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/30"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                    <div className="flex flex-col justify-end">
                      <h3 className="text-lg font-semibold leading-6 text-white">
                        <a>
                          <span className="absolute inset-0"></span>
                          {parse(docs.name)}
                        </a>
                      </h3>
                    </div>

                    <div className="mt-3 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </article>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
