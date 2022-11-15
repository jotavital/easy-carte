import { useTheme } from "@emotion/react";
import { Grid, IconButton, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Empty from "../Empty";
import CustomDivider from "../misc/CustomDivider";
import { HelpersContext, useHelpers } from "../../contexts/helpers";
import CustomButton from "../buttons/CustomButton";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { apiClient } from "../../providers/apiClient";
import "./index.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useOrders } from "../../contexts/orders";
import DeleteIcon from "@mui/icons-material/Delete";

function OrderTabItemsList() {
    let orderTotal = 0;

    const {
        palette: { primary, success, error },
    } = useTheme();

    const { convertToBrl } = useHelpers();

    const {
        handleFetchOrder,
        orderTabItems,
        fetchUnpaidOrders,
        fetchFinishedOrders,
        handleRemoveProduct
    } = useOrders();

    const handleOrder = () => {
        Swal.fire({
            title: "Deseja fechar este pedido?",
            text: "Depois que você fechar o pedido, será necessário abrir outro para pedir mais produtos",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: primary.main,
            cancelButtonColor: error.main,
            confirmButtonText: "Sim, fechar",
            cancelButtonText: "Voltar",
        }).then((result) => {
            if (result.isConfirmed) {
                apiClient
                    .post(`/orders/${orderTabItems[0]?.order_id}/close`)
                    .then((response) => {
                        toast.success(
                            "Pronto! Seu pedido foi enviado para a cozinha."
                        );

                        handleFetchOrder();
                        fetchUnpaidOrders();
                        fetchFinishedOrders();
                    })
                    .catch((error) => {
                        toast.error("Erro ao fechar pedido.");
                    });
            }
        });
    };

    useEffect(() => {
        handleFetchOrder();
    }, []);

    return orderTabItems && orderTabItems.length > 0 ? (
        <Grid item container justifyContent={{ sm: "start", xs: "center" }}>
            <Grid item padding marginBottom>
                <Typography
                    textAlign={{ sm: "left", xs: "center" }}
                    style={{ fontWeight: "500" }}
                >
                    #{orderTabItems[0]?.order?.hash}
                </Typography>
            </Grid>
            {orderTabItems.map((item) => {
                orderTotal += Number(item.product.price * item.quantity);
                return (
                    <Grid container key={item.id}>
                        <Grid padding container>
                            <Grid
                                item
                                xs={1}
                                display={{ xs: "none", sm: "flex" }}
                            >
                                <img
                                    src={item?.product?.main_image}
                                    alt={item?.product?.name}
                                    className="img-responsive"
                                />
                            </Grid>
                            <Grid item sm={7} xs={12} padding>
                                <Typography
                                    textAlign={{ sm: "left", xs: "center" }}
                                >
                                    <strong style={{ color: primary.main }}>
                                        {item.quantity}x
                                    </strong>{" "}
                                    - {item?.product?.name}
                                </Typography>
                            </Grid>
                            <Grid item sm={2} xs={12} padding>
                                <Typography
                                    textAlign="center"
                                    color={success.main}
                                >
                                    {convertToBrl(
                                        item.quantity * item?.product?.price
                                    )}
                                </Typography>
                            </Grid>
                            <Grid container item sm={1} xs={12} padding justifyContent="center">
                                <IconButton onClick={() => handleRemoveProduct(item.id)}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <CustomDivider />
                    </Grid>
                );
            })}

            <Grid container justifyContent={{ md: "right", xs: "center" }}>
                <Grid item md={3}>
                    <Typography>
                        Total:{" "}
                        <span style={{ color: success.main }}>
                            {convertToBrl(orderTotal)}
                        </span>
                    </Typography>
                </Grid>
            </Grid>

            <Grid marginTop={3} container justifyContent="center" gap={2}>
                <Grid item>
                    <CustomButton
                        text="Pedir"
                        onClick={handleOrder}
                        endIcon={<CheckCircleIcon />}
                    />
                </Grid>
            </Grid>
        </Grid>
    ) : (
        <Empty />
    );
}

export default OrderTabItemsList;
