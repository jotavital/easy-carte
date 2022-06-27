import { combineReducers } from "redux";
import appReducer from "./appSlice";
import restaurantsReducer from "./restaurants/restaurantsSlice";
import snackbarsReducer from './snackbars/snackbarsSlice';

export default combineReducers({
    app: appReducer,
    snackbars: snackbarsReducer,
    restaurants: restaurantsReducer
})