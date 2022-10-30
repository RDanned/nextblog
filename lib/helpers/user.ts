import {getItem} from "./psStorage";

export const hasToken = (): boolean => Boolean(getItem("token"))

export const checkIsLoggedIn = (): boolean => hasToken()