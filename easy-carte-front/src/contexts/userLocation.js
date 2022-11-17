import { createContext, useContext, useState } from "react";

export const UserLocationContext = createContext();

export const UserLocationProvider = ({ children }) => {
    const [userLocation, setUserLocation] = useState(null);
    const isUserAtHome = userLocation === "home";
    const isUserAtRestaurant = userLocation === "restaurant";

    const handleSetUserLocation = (location = null) => {
        console.log("setando");
        if (location) {
            localStorage.setItem(
                "easycarte@user_location",
                JSON.stringify(location)
            );
        } else {
            localStorage.removeItem("easycarte@user_location");
        }

        setUserLocation(location);
    };

    return (
        <UserLocationContext.Provider
            value={{
                userLocation,
                handleSetUserLocation,
                isUserAtHome,
                isUserAtRestaurant,
            }}
        >
            {children}
        </UserLocationContext.Provider>
    );
};

export const useUserLocation = () => {
    return useContext(UserLocationContext);
};
