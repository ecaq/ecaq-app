import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { EcaqCoreModel } from "../models/ecaq-core-model";
//import agent from "../api/agent";

export default class EcaqCoreStore {
  ecaqCoreRegistry = new Map<string, EcaqCoreModel>();
  selectedEcaqCore: EcaqCoreModel | undefined = undefined;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  // this is Computed Property
  get getCores() {
    return Array.from(this.ecaqCoreRegistry.values()).filter(
      (i) => i.isActive === true
    );
  }

  loadEcaqCores = async () => {
    this.setLoadingInitial(true);
    console.log(
      "loadInit call",
      this.loadingInitial,
      "sz : ",
      this.ecaqCoreRegistry.size
    );
    try {
      const cores = await agent.Core.list();
      console.log("load-banners call", cores);
      //runInAction(() => {})

      cores.forEach((a) => {
        this.setCore(a);
      });

      this.setLoadingInitial(false);

      console.log("loadInit call", this.loadingInitial);
    } catch (error) {
      console.log(error);
      //runInAction(() => {})
      this.setLoadingInitial(false);
    }
  };

  loadEcaqCore = async (id: string = "1") => {
    let core = this.getCore(id);
    if (core) {
      this.selectedEcaqCore = core;
      return core;
    } else {
      try {
        core = await agent.Core.details(+id);
        this.setCore(core);
        runInAction(() => (this.selectedEcaqCore = core));
        this.setLoadingInitial(false);
        return core;
      } catch (error) {
        console.log(error);
        //runInAction(() => {})
        this.setLoadingInitial(false);
      }
    }
  };

  private setCore = (abt: EcaqCoreModel) => {
    abt.imageUrl = `${import.meta.env.VITE_BASE_URL}${abt.imageUrl}`;
    this.ecaqCoreRegistry.set(String(abt.id), abt);
  };

  private getCore = (id: string) => {
    return this.ecaqCoreRegistry.get(id);
  };
}
