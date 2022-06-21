const SELECT_CITY = 'app/selectCity';

export const selectCity = (payload) => ({
    type: SELECT_CITY,
    payload
});

const initialState = {
    isCitySelected: !!localStorage.getItem('selected_city')
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_CITY:
            // ? additional code is in the file setCityLocalStorageMiddleware.js
            return {
                ...state,
                isCitySelected: true
            };
        default:
            return state
    }
}