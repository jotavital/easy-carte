// import { apiClient } from "../../providers/apiClient";
// import { setUserLocation } from "../appSlice";

// export const setCityLocalStorageMiddleware = (store) => (next) => (action) => {
//     const { app } = store.getState();

//     switch (action.type) {
//         case 'app/setUserLocation':
//             const userLocation = action.payload;

//             if (userLocation) {
//                 localStorage.setItem('selected_city', JSON.stringify(data));
//             }

//             localStorage.removeItem('user_location');
//             break;
//         default:
//             next(action);
//             break;
//     }
// }