export const setCityLocalStorageMiddleware = (store) => (next) => (action) => {
    const { app } = store.getState();

    switch (action.type) {
        case 'app/setUserLocation':
            const userLocation = action.payload;

            if (userLocation) {
                localStorage.setItem('easycarte@user_location', JSON.stringify(data));
            }

            localStorage.removeItem('easycarte@user_location');
            break;
        default:
            next(action);
            break;
    }
}