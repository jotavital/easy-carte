import { createContext, useEffect, useState } from "react";
import { apiClient } from "../providers/apiClient";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux/snackbars/snackbarsSlice";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserAuthenticated) {
            setUser(localStorage.getItem("authenticatedUser"));
        }
    }, []);

    const login = (data) => {
        apiClient
            .post("/login", data)
            .then((response) => {
                setUser(response.data[0]);
                localStorage.setItem(
                    "authenticatedUser",
                    JSON.stringify(response.data[0])
                );

                navigate("/");
            })
            .catch((error) => {
                dispatch(
                    setSnackbar(
                        true,
                        "error",
                        "Erro ao fazer login. Tente novamente.",
                        "center"
                    )
                );
            });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authenticatedUser");

        apiClient.post("/logout").catch((error) => {
            console.error("Não foi possível fazer o logout.");
        });

        navigate("/");
    };

    const isUserAuthenticated = () => {
        const storedUser = localStorage.getItem("authenticatedUser");

        if (storedUser) {
            return true;
        }
        return false;
    };

    return (
        <AuthContext.Provider
            value={{ isUserAuthenticated, user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
