import "./App.css";
import "./css/debuggingStyles.css";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/router/AppRoutes";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material";
import { AuthProvider } from "./contexts/auth";
import CustomSnackBar from "./components/snackbars/CustomSnackbar";
import { themeOptions } from "./providers/themeOptions";
import { HelpersProvider } from "./contexts/helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrdersProvider } from "./contexts/orders";
import { RestaurantsProvider } from "./contexts/restaurants";

const theme = createTheme(themeOptions);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <HelpersProvider>
                    <RestaurantsProvider>
                        <OrdersProvider>
                            <CustomSnackBar />
                            <BrowserRouter>
                                <AuthProvider>
                                    <NavBar />
                                    <AppRoutes />
                                </AuthProvider>
                            </BrowserRouter>
                        </OrdersProvider>
                    </RestaurantsProvider>
                </HelpersProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
