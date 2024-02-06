import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/server-error";

export default class CommonStore {
    error: ServerError | null = null
    token: string | null = localStorage.getItem("jwt")
    appLoaded: boolean = false

    constructor() {
        makeAutoObservable(this)

        // This reaction will run only when this.token value change (not on initialization)
        reaction (
            () => this.token,
            token => {
                if(token) {
                    localStorage.setItem("jwt", token)
                } else {
                    localStorage.removeItem("jwt")
                }
            }
        )
    }

    setServerError(error: ServerError) {
        this.error = error
    }

    setToken = (token: string | null) => {
        this.token = token
    }

    setAppLoaded = () => {
        this.appLoaded = true
    }
}