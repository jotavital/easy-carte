import { Card, CardContent, Grid } from "@mui/material";
import CustomButton from "../buttons/CustomButton";
import OrderTabItemsList from "../lists/OrderTabItemsList";
import UnpaidOrdersList from "../lists/UnpaidOrdersList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { HelpersContext } from "../../contexts/helpers";
import CustomAccordion from "../misc/CustomAccordion";
import FinishedOrdersList from "../lists/FinishedOrdersList";

function OrderTabPage() {
    const { redirectToCurrentRestaurant } = useContext(HelpersContext);
    const handleBackToMenu = () => {
        redirectToCurrentRestaurant();
    };

    return (
        <Card>
            <CardContent>
                <Grid padding={3} marginBottom={3}>
                    <CustomAccordion
                        title="Pedido atual"
                        content={
                            <Grid padding>
                                <OrderTabItemsList />
                            </Grid>
                        }
                    />
                    <CustomAccordion
                        title="Pedidos em andamento"
                        content={
                            <Grid padding marginBottom={3}>
                                <UnpaidOrdersList />
                            </Grid>
                        }
                    />
                    <CustomAccordion
                        title="Pedidos finalizados"
                        content={
                            <Grid padding marginBottom={3}>
                                <FinishedOrdersList />
                            </Grid>
                        }
                    />
                </Grid>

                <Grid marginTop={3} container justifyContent="center" gap={2}>
                    <Grid item>
                        <CustomButton
                            color="primary"
                            text="Voltar ao cardápio"
                            onClick={handleBackToMenu}
                            startIcon={<ArrowBackIcon />}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default OrderTabPage;
