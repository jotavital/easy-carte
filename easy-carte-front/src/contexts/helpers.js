import { createContext, useContext } from "react";

export const HelpersContext = createContext();

export const HelpersProvider = ({ children }) => {
    const currentRestaurant = localStorage.getItem(
        "easycarte@current_restaurant"
    );

    const convertToBrl = (value) => {
        return Number(value / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    };

    const redirectToCurrentRestaurant = () => {
        window.location.href = `/restaurants/${currentRestaurant}/products`;
    };

    return (
        <HelpersContext.Provider
            value={{
                convertToBrl,
                currentRestaurant,
                redirectToCurrentRestaurant,
            }}
        >
            {children}
        </HelpersContext.Provider>
    );
};

export const useHelpers = () => {
    return useContext(HelpersContext);
};