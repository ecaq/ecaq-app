import { makeAutoObservable, runInAction } from "mobx";
import { MemberModel } from "../models/member-model";
import agent from "../api/agent";
//import agent from "../api/agent";

export default class MemberStore {
    memberRegistry = new Map<string, MemberModel>();
    selectedMember: MemberModel | undefined = undefined;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    // this is Computed Property
    get getMembers() {
      return Array.from(this.memberRegistry.values()).filter(
          (i) => i.isActive === true
      );
    }
    get getMembersByName() {
      return Array.from(this.memberRegistry.values())
        .filter(
            (i) => i.isActive === true
        ).sort((a, b) => {
          if (a.memberName < b.memberName) {
            return -1;
          }
          if (a.memberName > b.memberName) {
            return 1;
          }
          return 0;
        })
    }
    
    loadMembers = async () => {
        this.setLoadingInitial(true);
        console.log(
          "loadInit call",
          this.loadingInitial,
          "sz : ",
          this.memberRegistry.size
        );
        try {
          const members = await agent.Member.list();
          console.log("load-banners call", members);
          //runInAction(() => {})
    
          members.forEach((a) => {
            this.setEntity(a);
          });
    
          this.setLoadingInitial(false);
    
          console.log("loadInit call", this.loadingInitial);
        } catch (error) {
          console.log(error);
          //runInAction(() => {})
          this.setLoadingInitial(false);
        }
      };

      loadMember = async (id: string = "1") => {
        let member = this.getEntity(id);
        if (member) {
          this.selectedMember = member;
          return member;
        } else {
          try {
            member = await agent.Member.details(+id);
            this.setEntity(member!);
            runInAction(() => (this.selectedMember = member));
            this.setLoadingInitial(false);
            return member;
          } catch (error) {
            console.log(error);
            //runInAction(() => {})
            this.setLoadingInitial(false);
          }
        }
      };



    private setEntity = (mdl: MemberModel) => {
        mdl.logoUrl = `${import.meta.env.VITE_BASE_URL}${mdl.logoUrl}`;
        this.memberRegistry.set(String(mdl.id), mdl);
    };

    private getEntity = (id: string) => {
    return this.memberRegistry.get(id);
    };




}