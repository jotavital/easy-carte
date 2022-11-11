import { Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useOrders } from "../../contexts/orders";
import Empty from "../Empty";
import CustomDivider from "../misc/CustomDivider";
import OrderStatus from "../text/OrderStatus";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function FinishedOrdersList() {
    const { fetchFinishedOrders, finishedOrders } = useOrders();

    useEffect(() => {
        fetchFinishedOrders();
    }, []);

    return finishedOrders && finishedOrders.length > 0 ? (
        <Grid container>
            {finishedOrders.map((order) => {
                return (
                    <Grid
                        key={order.id}
                        padding
                        container
                        item
                        justifyContent="center"
                    >
                        <Grid item sm={6} padding>
                            <Typography
                                textAlign={{ sm: "left", xs: "center" }}
                                style={{ fontWeight: "500" }}
                            >
                                #{order.hash}
                            </Typography>
                            <Button
                                startIcon={<AddCircleOutlineIcon />}
                                onClick={() => null}
                            >
                                <Typography>Detalhes</Typography>
                            </Button>
                        </Grid>
                        <Grid
                            container
                            item
                            justifyContent="center"
                            sm={6}
                            padding
                        >
                            <OrderStatus status={order.status} />
                        </Grid>
                        <CustomDivider />
                    </Grid>
                );
            })}
        </Grid>
    ) : (
        <Empty />
    );
}

export default FinishedOrdersList;
