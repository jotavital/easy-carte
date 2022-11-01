const SET_SNACKBAR = "snackbars/snackbarToggled";

export const setSnackbar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = "",
    snackbarHorizontal = "center"
) => ({
    type: SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage,
    snackbarHorizontal,
});

const initialState = {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: "",
    snackbarHorizontal: "center",
};

export default function snackbarsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SNACKBAR:
            const {
                snackbarOpen,
                snackbarMessage,
                snackbarType,
                snackbarHorizontal,
            } = action;
            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage,
                snackbarHorizontal,
            };
        default:
            return state;
    }
}
