import { Grid, Typography } from "@mui/material";

function Empty() {
    return (
        <Grid container justifyContent="center" flexDirection="column">
            <Grid item xs={12} container justifyContent="center" padding>
                <Typography variant="h5">Ops!</Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center" padding>
                <Typography variant="h6" textAlign="center">
                    Não há nada para exibir aqui
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Empty;
