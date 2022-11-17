const SELECT_CITY = "app/selectCity";

var cityFromLocalStorage =
    JSON.parse(localStorage.getItem("easycarte@selected_city")) ?? null;
var userLocationFromLocalStorage =
    localStorage.getItem("easycarte@user_location") ?? null;

const initialState = {
    isCitySelected: !!cityFromLocalStorage,
    selectedCity: cityFromLocalStorage ?? null,
    cityUrl: cityFromLocalStorage ? cityFromLocalStorage.city_url : null,
};

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
        default:
            return state;
    }
}
