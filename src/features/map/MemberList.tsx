//import { useStore } from "../../app/stores/store"
import { Member } from "../../app/models/member"
import MemberItem from "./MemberItem"
import { observer } from "mobx-react-lite"

interface Props {
    members: Member[]
}

export default observer(function MemberList({members}: Props) {
    // const {memberStore} = useStore()
    // const {members} = memberStore

    
    return (
        <ul className={''}>
            {
                members?.map(member => (
                    <MemberItem member={member} key={member.id} />
                ))
            }
        </ul>
    )
})
