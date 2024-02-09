import AboutUs from "../components/AboutUs";
import SwiperSlider from "../components/SwiperSlider";
import Testimonies from "../components/Testimonies";

export default function Home() {
  return (
    <div className="-mt-16">
      <SwiperSlider />
      {/* <MissionVision /> */}
      <AboutUs />
      {/*
      <About /> 
      <AboutEcaq />       
      */}
      {/* <Statistics /> */}


      <Testimonies />

      {/* <SwiperSliderChildProps>
        <Testimonies />
      </SwiperSliderChildProps> */}

      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20"></main>
      </div>
    </div>
  );
}
