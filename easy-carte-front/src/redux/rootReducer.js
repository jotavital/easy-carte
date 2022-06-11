import { combineReducers } from "redux";
import appReducer from "./appSlice";
import snackbarsReducer from './snackbars/snackbarsSlice';

export default combineReducers({
    snackbars: snackbarsReducer,
    app: appReducer
})