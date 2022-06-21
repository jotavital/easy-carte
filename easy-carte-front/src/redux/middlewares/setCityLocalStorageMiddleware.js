import { apiClient } from "../../providers/apiClient";

export const setCityLocalStorageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case 'app/selectCity':
            const selectedCityId = action.payload;
            const { app } = store.getState();

            if (!app.isCitySelected) {
                apiClient.get('/city/' + selectedCityId)
                    .then(({ data }) => {
                        localStorage.setItem('selected_city', JSON.stringify(data));
                        next(action);
                    });
            }
            break;

        default:
            next(action);
            break;
    }
}