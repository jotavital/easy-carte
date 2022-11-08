import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Empty from "../Empty";
import CustomDivider from "../misc/CustomDivider";
import { HelpersContext } from "../../contexts/helpers";
import CustomButton from "../buttons/CustomButton";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { apiClient } from "../../providers/apiClient";
import "./index.css";

function OrderTabItemsList() {
    const [orderTabItems, setOrderTabItems] = useState();
    const {
        palette: { primary, success, error },
    } = useTheme();

    const { convertToBrl } = useContext(HelpersContext);

    const handleOrder = () => {
        Swal.fire({
            title: "Deseja fechar esta comanda?",
            text: "Depois que você fechar a comanda, será necessário abrir outra para pedir mais produtos",
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
                        console.log(response);
                        toast.success(
                            "Pronto! Seu pedido foi enviado para a cozinha."
                        );
                    })
                    .catch((error) => {
                        toast.error("Erro ao fechar comanda.");
                    });
            }
        });
    };

    const handleFetchOrder = () => {
        apiClient.get("orders").then(({ data }) => {
            setOrderTabItems(data);
        });
    };

    useEffect(() => {
        handleFetchOrder();
    }, []);

    return !orderTabItems ? (
        <Empty />
    ) : (
        <Grid item container>
            <Grid padding marginBottom>
                <Typography variant="h5">
                    Pedido: #{orderTabItems[0]?.order?.hash}
                </Typography>
            </Grid>
            {orderTabItems.map((item) => {
                return (
                    <Grid container key={item.id}>
                        <Grid padding container>
                            <Grid xs={1} display={{ xs: "none", sm: "flex" }}>
                                <img
                                    src={item?.product?.main_image}
                                    alt={item?.product?.name}
                                    className="img-responsive"
                                />
                            </Grid>
                            <Grid item sm={8} xs={6} padding>
                                <span style={{ color: primary.main }}>
                                    {item.quantity}x
                                </span>{" "}
                                - {item?.product?.name}
                            </Grid>
                            <Grid item xs={2} padding>
                                <Typography
                                    textAlign="center"
                                    color={success.main}
                                >
                                    {convertToBrl(
                                        item.quantity * item?.product?.price
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                        <CustomDivider />
                    </Grid>
                );
            })}

            <Grid marginTop={3} container justifyContent="center">
                <CustomButton text="Pedir" onClick={handleOrder} />
            </Grid>
        </Grid>
    );
}

export default OrderTabItemsList;
