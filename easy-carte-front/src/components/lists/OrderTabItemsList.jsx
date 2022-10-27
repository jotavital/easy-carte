import { Card, CardContent, Grid } from "@mui/material";
import Empty from "../Empty";

function OrderTabItemsList() {
    let orderTabItems = localStorage.getItem("easycarte@order_tab");
    orderTabItems = JSON.parse(orderTabItems);

    console.log(orderTabItems);

    return !orderTabItems ? (
        <Empty />
    ) : (
        orderTabItems.map((item) => {
            return (
                <Grid key={item.id} item marginBottom={3}>
                    <Card>
                        <CardContent>
                            {/* TODO: implementar react datatable */}
                            <Grid style={{ backgroundColor: "red" }}>
                                {item.product_name}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            );
        })
    );
}

export default OrderTabItemsList;
