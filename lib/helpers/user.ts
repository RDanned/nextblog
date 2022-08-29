import {getItem} from "./psStorage";

export const isLoggedIn = (): boolean => Boolean(getItem("token"))