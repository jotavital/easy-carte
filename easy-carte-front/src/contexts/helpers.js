import { createContext } from "react";
import { useSelector } from "react-redux";

export const HelpersContext = createContext();

export const HelpersProvider = ({ children }) => {
    const userLocation = useSelector((state) => state.app.userLocation);
    const isUserAtHome = userLocation === "home";
    const isUserAtRestaurant = userLocation === "restaurant";
    const currentRestaurant = localStorage.getItem(
        "easycarte@current_restaurant"
    );

    const convertToBrl = (value) => {
        return Number(value).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    };

    return (
        <HelpersContext.Provider
            value={{
                isUserAtHome,
                isUserAtRestaurant,
                convertToBrl,
                currentRestaurant,
            }}
        >
            {children}
        </HelpersContext.Provider>
    );
};
