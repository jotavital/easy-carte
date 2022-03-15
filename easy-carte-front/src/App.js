import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

function App() {

    const theme = useTheme();

    return (
        <>
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
