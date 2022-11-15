import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { apiClient } from "../providers/apiClient";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [orderTabItems, setOrderTabItems] = useState();
    const [unpaidOrders, setUnpaidOrders] = useState();
    const [finishedOrders, setFinishedOrders] = useState();

    const handleFetchOrder = () => {
        apiClient.get("orders").then(({ data }) => {
            setOrderTabItems(data);
        });
    };

    const fetchUnpaidOrders = () => {
        apiClient.get("orders/unpaid").then(({ data }) => {
            setUnpaidOrders(data);
        });
    };

    const fetchFinishedOrders = () => {
        apiClient.get("orders/finished").then(({ data }) => {
            setFinishedOrders(data);
        });
    };

    const handleRemoveProduct = (orderProductId) => {
        apiClient
            .delete(`order-products/${orderProductId}`)
            .then(({ data }) => {
                if (data) {
                    toast.success("Produto removido do pedido");
                    handleFetchOrder();
                } else {
                    toast.error("Erro ao remover produto do pedido");
                }
            });
    };

    return (
        <OrdersContext.Provider
            value={{
                orderTabItems,
                handleFetchOrder,
                fetchUnpaidOrders,
                fetchFinishedOrders,
                unpaidOrders,
                finishedOrders,
                handleRemoveProduct,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export const useOrders = () => {
    return useContext(OrdersContext);
};
