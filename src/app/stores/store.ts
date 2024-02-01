import { createContext, useContext } from "react"
import MemberStore from "./memberStore."

interface Store {
    memberStore: MemberStore
}

export const store: Store = {
    memberStore: new MemberStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}