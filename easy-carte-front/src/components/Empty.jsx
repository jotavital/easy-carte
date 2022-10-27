import { Grid, Typography } from "@mui/material";

function Empty() {
    return (
        <Grid container justifyContent="center" flexDirection="column">
            <Grid item xs={12} container justifyContent="center">
                <Typography variant="h5">Ops!</Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
                <Typography variant="h6">Nenhum registro encontrado</Typography>
            </Grid>
        </Grid>
    );
}

export default Empty;
