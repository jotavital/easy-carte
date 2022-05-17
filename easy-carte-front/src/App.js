import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './components/router/AppRoutes';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './contexts/auth';

const theme = createTheme({});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
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
