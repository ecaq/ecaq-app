import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { AboutModel } from "../models/about-model";
//import agent from "../api/agent";

export default class AboutStore {
  aboutRegistry = new Map<string, AboutModel>();
  selectedAbout: AboutModel | undefined = undefined
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  // this is Computed Property
  get getAbouts() {
    return Array.from(this.aboutRegistry.values());
  }

  loadAbouts = async () => {
    this.setLoadingInitial(true);
    console.log("loadInit call", this.loadingInitial, "sz : ", this.aboutRegistry.size)
    try {
      const abouts = await agent.About.list()
      console.log("load-banners call", abouts);
      //runInAction(() => {})

      abouts.forEach((a) => {
        this.setAbout(a);
      });

      this.setLoadingInitial(false);

      console.log("loadInit call", this.loadingInitial);
    } catch (error) {
      console.log(error);
      //runInAction(() => {})
      this.setLoadingInitial(false);
    }
  }

  
  loadAbout = async (id: string = "1") => {
    let abt = this.getAbout(id)
    if(abt) {
        this.selectedAbout = abt
        return abt
    } else {
        try {
            abt = await agent.About.details(+id)
            this.setAbout(abt)
            runInAction(() => this.selectedAbout = abt)                            
            this.setLoadingInitial(false)
            return abt
        } catch (error) {
            console.log(error)
            //runInAction(() => {})
            this.setLoadingInitial(false)            
        }
    }

}


  private setAbout = (abt: AboutModel) => {
    abt.backgroundImage = `${import.meta.env.VITE_BASE_URL}${
      abt.backgroundImage
    }`
    this.aboutRegistry.set(String(abt.id), abt);
  };

  private getAbout = (id: string) => {
    return this.aboutRegistry.get(id);
  };
}
