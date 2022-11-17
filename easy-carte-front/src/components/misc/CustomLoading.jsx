import { CircularProgress, Grid } from "@mui/material";

function CustomLoading() {
    return (
        <Grid container justifyContent="center" margin>
            <CircularProgress />
        </Grid>
    );
}

export default CustomLoading;
