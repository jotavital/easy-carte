import { createContext, useContext, useState } from "react";
import { apiClient } from "../providers/apiClient";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
    const [restaurant, setRestaurant] = useState({});
    const [restaurantSettings, setRestaurantSettings] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const fetchRestaurantData = (restaurantId) => {
        apiClient.get("/restaurants/" + restaurantId).then(({ data }) => {
            setRestaurant(data);
            setRestaurantSettings(JSON.parse(data.settings));
            setIsDataLoaded(true);
        });
    };

    return (
        <RestaurantsContext.Provider
            value={{
                restaurant,
                fetchRestaurantData,
                isDataLoaded,
                restaurantSettings
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};

export const useRestaurants = () => {
    return useContext(RestaurantsContext);
};
