import { apiClient } from "../../providers/apiClient";
import { setSnackbar } from '../snackbars/snackbarsSlice';

export const setCityLocalStorageMiddleware = (store) => (next) => (action) => {
    const { app } = store.getState();

    switch (action.type) {
        case 'app/selectCity':
            const selectedCityId = action.payload;

            if (!app.isCitySelected) {
                apiClient.get('/cities/' + selectedCityId)
                    .then(({ data }) => {
                        localStorage.setItem('selected_city', JSON.stringify(data));
                        next(action);
                    })
                    .catch(() => {
                        store.dispatch(
                            setSnackbar(
                                true,
                                'error',
                                'Erro desconhecido ao selecionar a cidade.',
                                'center'
                            )
                        );
                        return false;
                    });
            }
            break;
        default:
            next(action);
            break;
    }
}