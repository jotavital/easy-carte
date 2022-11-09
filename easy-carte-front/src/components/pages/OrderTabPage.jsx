import { Card, CardContent, Grid, Typography } from "@mui/material";
import OrderTabItemsList from "../lists/OrderTabItemsList";
import UnpaidOrdersList from "../lists/UnpaidOrdersList";
import CustomDivider from "../misc/CustomDivider";

function OrderTabPage() {
    return (
        <Card>
            <CardContent>
                <Grid padding={3} marginBottom={3}>
                    <Grid padding>
                        <Typography variant="h5">Pedido atual</Typography>
                        <OrderTabItemsList />
                    </Grid>
                    <Grid padding marginBottom={3}>
                        <Typography variant="h5">
                            Pedidos em andamento
                        </Typography>
                        <UnpaidOrdersList />
                    </Grid>
                    <Grid padding marginBottom={3}>
                        <Typography variant="h5">
                            Pedidos finalizados
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default OrderTabPage;
