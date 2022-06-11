const CITY_SELECTED = 'app/citySelected';

export const citySelected = (
    isCitySelected
) => ({
    type: CITY_SELECTED,
    isCitySelected
});

const initialState = {
    isCitySelected: false
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case CITY_SELECTED:
            const { isCitySelected } = action;
            return {
                ...state,
                isCitySelected
            };
        default:
            return state
    }
}
