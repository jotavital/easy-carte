import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import Empty from "../Empty";
import CustomDivider from "../misc/CustomDivider";
import { HelpersContext } from "../../contexts/helpers";
import CustomButton from "../buttons/CustomButton";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function OrderTabItemsList() {
    const {
        palette: { primary, success, error },
    } = useTheme();

    const { convertToBrl } = useContext(HelpersContext);

    let orderTabItems = localStorage.getItem("easycarte@order_tab");
    orderTabItems = JSON.parse(orderTabItems);

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
                toast.success("Pronto! Seu pedido foi enviado para a cozinha.");
            }
        });
    };

    return !orderTabItems ? (
        <Empty />
    ) : (
        <Grid item container>
            {orderTabItems.map((item) => {
                return (
                    <Grid container key={item.id}>
                        <Grid padding container>
                            <Grid item sm={1} xs={2}>
                                <Typography
                                    display="flex"
                                    alignItems="center"
                                    height="100%"
                                    color={primary.main}
                                >
                                    {item.quantity}x
                                </Typography>
                            </Grid>
                            <Grid item sm={9} xs={6}>
                                {item.product_name}
                            </Grid>
                            <Grid item xs={2}>
                                <Typography
                                    textAlign="center"
                                    color={success.main}
                                >
                                    {convertToBrl(
                                        item.quantity * item.product_price
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
