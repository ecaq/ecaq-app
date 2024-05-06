//import { useStore } from "../../app/stores/store"
// import { MemberModel } from "../../app/models/member-model"
// import MemberItem from "./MemberItem"
import { observer } from "mobx-react-lite"

// interface Props {
//     members: MemberModel[]
// }

export default observer(function MemberList() {
    // const {memberStore} = useStore()
    // const {members} = memberStore

    
    return (
        <ul className={''}>
            {
                // members?.map(member => (
                //     <MemberItem member={member} key={member.id} />
                // ))
            }
        </ul>
    )
})
