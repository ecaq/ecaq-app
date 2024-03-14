import { makeAutoObservable } from "mobx";
import { HomeBanner } from "../models/home-banner";
import agent from "../api/agent";
//import agent from "../api/agent";

export default class HomeBannerStore {
  homeBannerRegistry = new Map<string, HomeBanner>();
  //selectedMember: Member | undefined = undefined
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  // this is Computed Property
  get getHomeBanners() {
    return Array.from(this.homeBannerRegistry.values());
  }

  loadHomeBanners = async () => {
    this.setLoadingInitial(true);
    console.log("loadInit call", this.loadingInitial, "sz : ", this.homeBannerRegistry.size)
    try {
      const banners = await agent.HomeBanners.list()
      console.log("load-banners call", banners);
      //runInAction(() => {})

      banners.forEach((banner) => {
        this.setBanner(banner);
      });

      this.setLoadingInitial(false);

      console.log("loadInit call", this.loadingInitial);
    } catch (error) {
      console.log(error);
      //runInAction(() => {})
      this.setLoadingInitial(false);
    }
  };

  private setBanner = (banner: HomeBanner) => {
    banner.imageDesktop = `${import.meta.env.VITE_BASE_URL}${
      banner.imageDesktop
    }`;
    banner.imageMobile = `${import.meta.env.VITE_BASE_URL}${
      banner.imageMobile
    }`;
    this.homeBannerRegistry.set(String(banner.id), banner);
  };

  // private getBanner = (id: number) => {
  //   return this.homeBannerRegistry.get(String(id));
  // };
}
