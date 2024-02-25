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
                <div className="group mx-auto auto-rows-fr gap-8 lg:mx-0 lg:max-w-none h-72">
                  <article className="flex justify-center relative isolate overflow-hidden rounded-xl bg-gray-900 h-full">
                    <img
                      src={docs.src}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/30"></div>
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                    <div className="flex flex-col justify-end text-center my-4">
                      <h3 className="text-md font-semibold text-gray-50">
                        <a>
                          <span className="absolute inset-0"></span>
                          {parse(docs.name)}
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
}
