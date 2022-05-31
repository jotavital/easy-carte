import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './components/router/AppRoutes';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './contexts/auth';
import CustomSnackBar from './components/snackbars/CustomSnackbar';

const theme = createTheme({});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <CustomSnackBar />
                <BrowserRouter>
                    <AuthProvider>
                        <NavBar />
                        <AppRoutes />
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
