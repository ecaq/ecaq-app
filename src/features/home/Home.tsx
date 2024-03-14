import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import AboutUs from "../components/AboutUs";
import LoadingComponent from "../components/LoadingComponent";
import SwiperSlider from "../components/SwiperSlider";
import SwiperSliderPerView from "../components/SwiperSliderPerView";
import Testimonies from "../components/Testimonies";
import { observer } from "mobx-react-lite";

export default observer(function Home() {
  const { homebannerStore } = useStore();
  const { loadHomeBanners, homeBannerRegistry } = homebannerStore;

  useEffect(() => {
    if (homeBannerRegistry.size < 1) {
      loadHomeBanners();
    }
  }, [homeBannerRegistry.size, loadHomeBanners]);

  if (homebannerStore.loadingInitial) return <LoadingComponent />;

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

      <SwiperSliderPerView />

      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20"></main>
      </div>
    </div>
  );
})
