import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { setCityLocalStorageMiddleware } from "./middlewares/setCityLocalStorageMiddleware";

const middlewares = applyMiddleware(setCityLocalStorageMiddleware);

const store = createStore(rootReducer, middlewares);

export default store;
