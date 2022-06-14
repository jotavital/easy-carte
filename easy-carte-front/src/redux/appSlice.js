import { apiClient } from "../providers/apiClient";

const CITY_SELECTED = 'app/citySelected';

export const citySelected = (selectedCityId) => ({
    type: CITY_SELECTED,
    selectedCityId
});

const initialState = {
    isCitySelected: !!localStorage.getItem('selected_city')
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CITY_SELECTED:
            const { selectedCityId } = action;

            if(!state.isCitySelected){
                apiClient.get('/city/' + selectedCityId)
                    .then(({ data }) => {
                        // !! write a middleware to store the city in local storage asynchronously
                        localStorage.setItem('selected_city', JSON.stringify(data));
                    });
            }

            return {
                ...state,
                isCitySelected: true
            };
        default:
            return state
    }
}