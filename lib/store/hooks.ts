import {useDispatch} from "react-redux";
import {AppDispatch} from "./index";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "./modules/user";

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useLoggedIn = () => useSelector(selectIsLoggedIn)