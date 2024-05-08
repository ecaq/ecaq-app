import { createContext, useContext } from "react"
import MemberStore from "./memberStore"
import CommonStore from "./commonStore"
import HomeBannerStore from "./homebannerStore"
import AboutStore from "./aboutStore"
import EcaqCoreStore from "./ecaqcoreStore"
import GalleryStore from "./galleryStore"
import AllianceStore from "./allianceStore"
import NewsStore from "./newsStore"

interface Store {
    memberStore: MemberStore
    commonStore: CommonStore
    homebannerStore: HomeBannerStore
    aboutStore: AboutStore
    ecaqcoreStore: EcaqCoreStore,
    allianceStore: AllianceStore,
    galleryStore: GalleryStore,
    newsStore: NewsStore
}

export const store: Store = {
    memberStore: new MemberStore(),
    commonStore: new CommonStore(),
    homebannerStore: new HomeBannerStore(),
    aboutStore: new AboutStore(),
    ecaqcoreStore: new EcaqCoreStore(),
    allianceStore: new AllianceStore(),
    galleryStore: new GalleryStore(),
    newsStore: new NewsStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}