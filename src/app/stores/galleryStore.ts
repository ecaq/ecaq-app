import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { GalleryModel } from "../models/gellery-model";
//import agent from "../api/agent";

export default class GalleryStore {
  galleryRegistry = new Map<string, GalleryModel>();
  selectedAbout: GalleryModel | undefined = undefined
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  // this is Computed Property
  get getGalleries() {
    return Array.from(this.galleryRegistry.values()).filter(
      (i) => i.isActive === true
    );
  }

  loadGalleries = async () => {
    this.setLoadingInitial(true);
    console.log("loadInit call", this.loadingInitial, "sz : ", this.galleryRegistry.size)
    try {
      const galleries = await agent.Gallery.list()
      console.log("load-banners call", galleries);
      //runInAction(() => {})

      galleries.forEach((a) => {
        this.setRegistry(a);
      });

      this.setLoadingInitial(false);

      console.log("loadInit call", this.loadingInitial);
    } catch (error) {
      console.log(error);
      //runInAction(() => {})
      this.setLoadingInitial(false);
    }
  }

  loadGalleriesWithImages = async () => {
    this.setLoadingInitial(true);
    console.log("loadInit call", this.loadingInitial, "sz : ", this.galleryRegistry.size)
    try {
      const galleries = await agent.Gallery.listWithImages()
      console.log("load-banners call", galleries);
      //runInAction(() => {})

      galleries.forEach((a) => {
        this.setRegistry(a);
      });

      this.setLoadingInitial(false);

      console.log("loadInit call", this.loadingInitial);
    } catch (error) {
      console.log(error);
      //runInAction(() => {})
      this.setLoadingInitial(false);
    }
  }
  
  loadGallery = async (id: string = "1") => {
    let gal = this.getRegistry(id)
    if(gal) {
        this.selectedAbout = gal
        return gal
    } else {
        try {
            gal = await agent.Gallery.details(+id)
            this.setRegistry(gal)
            runInAction(() => this.selectedAbout = gal)                            
            this.setLoadingInitial(false)
            return gal
        } catch (error) {
            console.log(error)
            //runInAction(() => {})
            this.setLoadingInitial(false)            
        }
    }

}


  private setRegistry = (abt: GalleryModel) => {
    abt.imageUrl = `${import.meta.env.VITE_BASE_URL}${
      abt.imageUrl
    }`
    this.galleryRegistry.set(String(abt.id), abt);
  };

  private getRegistry = (id: string) => {
    return this.galleryRegistry.get(id);
  };
}
