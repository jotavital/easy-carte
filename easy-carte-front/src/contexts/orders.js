import { createContext, useContext, useState } from "react";
import { apiClient } from "../providers/apiClient";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [orderTabItems, setOrderTabItems] = useState();

    const handleFetchOrder = () => {
        apiClient.get("orders").then(({ data }) => {
            setOrderTabItems(data);
        });
    };

    return (
        <OrdersContext.Provider
            value={{
                orderTabItems,
                handleFetchOrder,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export const useOrders = () => {
    return useContext(OrdersContext);
};
