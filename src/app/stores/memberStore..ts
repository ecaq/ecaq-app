import { makeAutoObservable } from "mobx";
import { Member } from "../models/member";
//import agent from "../api/agent";

export default class MemberStore {
    members: Member[] = []
    selectedMember: Member | undefined = undefined
    loadingInitial = false
    

    constructor() {
        makeAutoObservable(this)
    }

    
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state
    }
    
    // loadMembers = async () => {
    //     console.log("loadmemebrs call")
    //     this.setLoadingInitial(true)
    //     try {
    //         const members = await agent.Members.list()
    //         console.log("loadmemebrs call", members)
    //         //runInAction(() => {})
    //             members.forEach(member => {                
    //                 //this.setMember(member)
    //                 // member.joinDate =  member.joinDate?.split('T')[0]
    //                 this.members.push(member)
    //             })                
                      
    //         this.setLoadingInitial(false)
    //     } catch (error) {
    //         console.log(error)
    //         //runInAction(() => {})
    //         this.setLoadingInitial(false)            
    //     }
    // }

    // loadMember = async (id: number) => {
    //     let member = this.getMember(id)
    //     if(member) {
    //         this.selectedMember = member
    //         return member
    //     } else {
    //         try {
    //             member = await agent.Members.details(id)
    //             this.setMember(member)
    //             runInAction(() => this.selectedMember = member)                            
    //             this.setLoadingInitial(false)
    //             return member
    //         } catch (error) {
    //             console.log(error)
    //             //runInAction(() => {})
    //             this.setLoadingInitial(false)            
    //         }
    //     }

    // }

    // private setMember = (member: Member) => {
    //     //activity.date = new Date(activity.date!)
    //     console.log("setmember call", member)
    //     this.members?.push(member)
    // }
    // private getMember = (id: number) => {
    //     return this.members?.find(x => x.id === id)
    //     // return this.members?.find((obj) => {
    //     //     return obj.id === id;
    //     //   });
    // }




}