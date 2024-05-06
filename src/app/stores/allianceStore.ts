import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { AllianceModel } from "../models/alliance-model";
//import agent from "../api/agent";

export default class AllianceStore {
  allianceRegistry = new Map<string, AllianceModel>();
  selectedAlliance: AllianceModel | undefined = undefined
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  // this is Computed Property
  get getAlliance() {
    return Array.from(this.allianceRegistry.values()).filter(
      (i) => i.isActive === true
    );
  }

  loadAlliances = async () => {
    this.setLoadingInitial(true);
    console.log("loadInit call", this.loadingInitial, "sz : ", this.allianceRegistry.size)
    try {
      const alliance = await agent.Alliance.list()
      console.log("load-banners call", alliance);
      //runInAction(() => {})

      alliance.forEach((a) => {
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

  loadAlliance = async (id: string = "1") => {
    let mdl = this.getRegistry(id)
    if(mdl) {
        this.selectedAlliance = mdl
        return mdl
    } else {
        try {
            mdl = await agent.Alliance.details(+id)
            this.setRegistry(mdl)
            runInAction(() => this.selectedAlliance = mdl)                            
            this.setLoadingInitial(false)
            return mdl
        } catch (error) {
            console.log(error)
            //runInAction(() => {})
            this.setLoadingInitial(false)            
        }
    }

  }



  private setRegistry = (abt: AllianceModel) => {
    abt.imageUrl = `${import.meta.env.VITE_BASE_URL}${
      abt.imageUrl
    }`
    this.allianceRegistry.set(String(abt.id), abt);
  };

  private getRegistry = (id: string) => {
    return this.allianceRegistry.get(id);
  };

}
