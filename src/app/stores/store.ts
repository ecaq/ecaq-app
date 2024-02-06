import { createContext, useContext } from "react"
import MemberStore from "./memberStore."
import CommonStore from "./commonStore"

interface Store {
    memberStore: MemberStore
    commonStore: CommonStore
}

export const store: Store = {
    memberStore: new MemberStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}