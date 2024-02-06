//import { useEffect } from "react";
//import MemberList from "./MemberList";
//import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
//import MapGoogle from "./MapGoogle";
//import LoadingComponent from "../components/LoadingComponent";

export default observer(function MapLayout() {
  // const { memberStore } = useStore();
  // const { loadMembers, members } = memberStore;

  // useEffect(() => {
  //   console.log("mmmm");
  //   if (members.length === 0) {
        
  //       console.log("0");
  //     loadMembers();
  //   }
    
  //   //console.log("mem", members);
  // }, [members, loadMembers]);

  // if (memberStore.loadingInitial) return <LoadingComponent />;

  return (
    // <div className="flex">
    //   <div className="w-full">
    //     <MemberList />
    //   </div>
    //   <Map />
    // </div>

    <div className="bg-appDark w-full h-screen">
      <div className="flex h-screen">
        <div className="flex-1 space-y-8 p-12">
          <div>
            {/* <MemberList members={members} /> */}
          </div>
        </div>

        <div className="">
          {/* <MapGoogle members={members} /> */}
        </div>
      </div>
    </div>
  )

})
