import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useOrders } from "../../contexts/orders";
import Empty from "../Empty";
import CustomDivider from "../misc/CustomDivider";
import OrderStatus from "../text/OrderStatus";
import CustomAccordion from "../misc/CustomAccordion";
import { useTheme } from "@emotion/react";
import { useHelpers } from "../../contexts/helpers";

function UnpaidOrdersList() {
    const { fetchUnpaidOrders, unpaidOrders } = useOrders();

    const {
        palette: { primary, success },
    } = useTheme();

    const { convertToBrl } = useHelpers();

    useEffect(() => {
        fetchUnpaidOrders();
    }, []);

    return unpaidOrders && unpaidOrders.length > 0 ? (
        <Grid container>
            {unpaidOrders.map((order) => {
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
                        <Grid item xs={12} marginBottom={3}>
                            <CustomAccordion
                                title="Itens"
                                content={order?.order_products?.map((item) => {
                                    return (
                                        <Grid container key={item.id}>
                                            <Grid padding container>
                                                <Grid
                                                    item
                                                    xs={1}
                                                    display={{
                                                        xs: "none",
                                                        sm: "flex",
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            item?.product
                                                                ?.main_image
                                                        }
                                                        alt={
                                                            item?.product?.name
                                                        }
                                                        className="img-responsive"
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    sm={8}
                                                    xs={12}
                                                    padding
                                                >
                                                    <Typography
                                                        textAlign={{
                                                            sm: "left",
                                                            xs: "center",
                                                        }}
                                                    >
                                                        <strong
                                                            style={{
                                                                color: primary.main,
                                                            }}
                                                        >
                                                            {item.quantity}x
                                                        </strong>{" "}
                                                        - {item?.product?.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    sm={2}
                                                    xs={12}
                                                    padding
                                                >
                                                    <Typography
                                                        textAlign="center"
                                                        color={success.main}
                                                    >
                                                        {convertToBrl(
                                                            item.quantity *
                                                                item?.product
                                                                    ?.price
                                                        )}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <CustomDivider />
                                        </Grid>
                                    );
                                })}
                            />
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

export default UnpaidOrdersList;
