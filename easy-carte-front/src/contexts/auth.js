import { createContext, useContext, useEffect, useState } from "react";
import { apiClient } from "../providers/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HelpersContext } from "./helpers";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { isUserAtRestaurant, redirectToCurrentRestaurant } =
        useContext(HelpersContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isUserAuthenticated) {
            setUser(localStorage.getItem("easycarte@authenticatedUser"));
        }
    }, []);

    const login = (data) => {
        apiClient
            .post("/login", data)
            .then((response) => {
                setUser(response.data[0]);

                localStorage.setItem(
                    "easycarte@authenticatedUser",
                    JSON.stringify(response.data[0])
                );

                if (isUserAtRestaurant) {
                    return redirectToCurrentRestaurant();
                }

                navigate("/");
            })
            .catch((error) => {
                toast.error("Erro ao fazer login. Tente novamente.");
            });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("easycarte@authenticatedUser");

        apiClient.post("/logout").catch((error) => {
            return toast.error("Não foi possível fazer o logout.");
        });

        if (isUserAtRestaurant) {
            return redirectToCurrentRestaurant();
        }

        navigate("/");
    };

    const isUserAuthenticated = () => {
        const storedUser = localStorage.getItem("easycarte@authenticatedUser");

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
