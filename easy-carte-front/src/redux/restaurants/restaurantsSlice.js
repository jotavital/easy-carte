const SET_RESTAURANT_SEARCH_QUERY = 'restaurants/setRestaurantSearchQuery';

export const setRestaurantSearchQuery = (payload) => ({
    type: SET_RESTAURANT_SEARCH_QUERY,
    payload
});

const initialState = {
    restaurantSearchQuery: ""
};

console.log(initialState.restaurantSearchQuery);
export default function restaurantsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RESTAURANT_SEARCH_QUERY:
            return {
                ...state,
                restaurantSearchQuery: action.payload
            };
        default:
            return state
    }
}