const SELECT_CITY = 'app/selectCity';

var cityFromLocalStorage = (localStorage.getItem('selected_city'));
cityFromLocalStorage = JSON.parse(cityFromLocalStorage) ?? null;

export const selectCity = (payload) => ({
    type: SELECT_CITY,
    payload
});

const initialState = {
    isCitySelected: !!cityFromLocalStorage,
    selectedCity: cityFromLocalStorage ?? null,
    cityUrl: (cityFromLocalStorage) ? cityFromLocalStorage.city_url : null
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_CITY:
            // ? additional code is located in the file setCityLocalStorageMiddleware.js
            return {
                ...state,
                isCitySelected: true
            };
        default:
            return state
    }
}