import { Card, CardContent, Grid } from "@mui/material";
import OrderTabItemsList from "../lists/OrderTabItemsList";

function OrderTabPage() {
    return (
        <Card>
            <CardContent>
                <Grid padding={3}>
                    <OrderTabItemsList />
                </Grid>
            </CardContent>
        </Card>
    );
}

export default OrderTabPage;
