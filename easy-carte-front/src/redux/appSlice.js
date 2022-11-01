const SELECT_CITY = "app/selectCity";
const SET_USER_LOCATION = "app/setUserLocation";

var cityFromLocalStorage =
    JSON.parse(localStorage.getItem("easycarte@selected_city")) ?? null;
var userLocationFromLocalStorage =
    localStorage.getItem("easycarte@user_location") ?? null;

const initialState = {
    isCitySelected: !!cityFromLocalStorage,
    selectedCity: cityFromLocalStorage ?? null,
    cityUrl: cityFromLocalStorage ? cityFromLocalStorage.city_url : null,
    userLocation: userLocationFromLocalStorage ?? null,
};

export const setUserLocation = (payload) => ({
    type: SET_USER_LOCATION,
    payload,
});

export const selectCity = (payload) => ({
    type: SELECT_CITY,
    payload,
});

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_CITY:
            // ? additional code is located in the file setCityLocalStorageMiddleware.js
            return {
                ...state,
                isCitySelected: true,
            };
        case SET_USER_LOCATION:
            // ? additional code is located in the file setUserLocationLocalStorageMiddleware.js
            action.payload === "" || action.payload == null
                ? localStorage.removeItem("easycarte@user_location")
                : localStorage.setItem(
                      "easycarte@user_location",
                      action.payload
                  );

            return {
                ...state,
                userLocation: action.payload,
            };
        default:
            return state;
    }
}
