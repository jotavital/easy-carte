import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar } from '../../redux/snackbars/snackbarsSlice';

export default function CustomSnackBar() {
    const dispatch = useDispatch();
    const snackbarOpen = useSelector(state => state.snackbars.snackbarOpen);
    const snackbarType = useSelector(state => state.snackbars.snackbarType);
    const snackbarMessage = useSelector(state => state.snackbars.snackbarMessage);
    const snackbarHorizontal = useSelector(state => state.snackbars.snackbarHorizontal);

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(setSnackbar(false, snackbarType, snackbarMessage, snackbarHorizontal));
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: snackbarHorizontal }}
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    severity={snackbarType}
                    sx={{ width: '100%' }}
                    // onClose={handleClose}
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </Stack>
    );
}