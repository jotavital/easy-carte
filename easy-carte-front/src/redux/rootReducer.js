import { combineReducers } from "redux";
import appReducer from "./appSlice";
import snackbarsReducer from './snackbars/snackbarsSlice';

export default combineReducers({
    app: appReducer,
    snackbars: snackbarsReducer
})