import { externalApiClient } from "../providers/externalApiClient";

const CITY_SELECTED = 'app/citySelected';

export const citySelected = (selectedCityId) => ({
    type: CITY_SELECTED,
    selectedCityId
});

const initialState = {
    isCitySelected: false,
    selectedCityId: null
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CITY_SELECTED:
            const { selectedCityId } = action;

            externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/' + selectedCityId)
                .then(({ data }) => {
                    localStorage.setItem('selected_city', JSON.stringify(data));
                });

            return {
                ...state,
                isCitySelected: true,
                selectedCityId
            };
        default:
            return state
    }
}