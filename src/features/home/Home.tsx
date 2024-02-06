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
      <div className="aspect-w-16 aspect-h-8">
        <iframe
          src="https://www.youtube.com/embed/6-aVluqleIc?rel=0?version=3&autoplay=1&mute=1&loop=1&controls=0&&showinfo=0"
          allow="autoplay"
        ></iframe>
      </div>
      {/* <div className="aspect-w-16 aspect-h-9">
        <object
          type="application/x-shockwave-flash"
          data="http://www.youtube.com/v/6-aVluqleIc?rel=0&loop=1&autoplay=1&showsearch=0&version=3&showinfo=0&modestbranding=1&fs=1"
        ></object>
      </div> */}
      
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
