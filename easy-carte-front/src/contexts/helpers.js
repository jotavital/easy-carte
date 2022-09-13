import { createContext } from 'react';
import { useSelector } from 'react-redux';

export const HelpersContext = createContext();

export const HelpersProvider = ({ children }) => {
    const userLocation = useSelector((state) => state.app.userLocation);
    const isUserAtHome = (userLocation === 'home');
    const isUserAtRestaurant = (userLocation === 'restaurant');

    return (
        <HelpersContext.Provider value={{ isUserAtHome, isUserAtRestaurant }}>
            {children}
        </HelpersContext.Provider>
    );
}