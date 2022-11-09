import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import CustomDivider from "../misc/CustomDivider";

function UnpaidOrdersList() {
    const {
        palette: { warning },
    } = useTheme();

    return (
        <Grid container>
            <Grid padding container>
                <Grid item xs={6} padding>
                    <Typography textAlign="center">Pedido: #136267</Typography>
                </Grid>
                <Grid item xs={6} padding>
                    <Typography textAlign="center">
                        Status:{" "}
                        <span style={{ color: warning.main }}>
                            Enviado à cozinha
                        </span>
                    </Typography>
                </Grid>
            </Grid>
            <CustomDivider />
        </Grid>
    );
}

export default UnpaidOrdersList;
