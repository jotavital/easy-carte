import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './components/AppRoutes';
import NavBar from './components/NavBar';

function App() {

    const theme = useTheme();

    return (
        <>
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
