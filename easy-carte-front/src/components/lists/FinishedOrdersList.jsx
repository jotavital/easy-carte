import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import CustomDivider from "../misc/CustomDivider";

function FinishedOrdersList() {
    const {
        palette: { success },
    } = useTheme();

    return (
        <Grid container>
            <Grid padding container>
                <Grid item xs={6} padding>
                    <Typography>Pedido: #136267</Typography>
                </Grid>
                <Grid item xs={6} padding>
                    <Typography textAlign="center">
                        Status:{" "}
                        <span style={{ color: success.main }}>Finalizado</span>
                    </Typography>
                </Grid>
            </Grid>
            <CustomDivider />
        </Grid>
    );
}

export default FinishedOrdersList;
