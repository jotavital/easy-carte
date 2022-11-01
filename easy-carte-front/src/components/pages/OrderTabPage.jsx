import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import OrderTabItemsList from "../lists/OrderTabItemsList";

function OrderTabPage() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">Comanda</Typography>
                <Grid padding={3}>
                    <OrderTabItemsList />
                </Grid>
            </CardContent>
        </Card>
    );
}

export default OrderTabPage;
