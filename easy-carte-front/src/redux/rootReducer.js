import { combineReducers } from "redux";
import snackbarsReducer from './snackbars/snackbarsSlice';

export default combineReducers({
    snackbars: snackbarsReducer
})